import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];
  displayAddEditModal = false;
  selectedTask: any = null;

  constructor(private taskService: TaskService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this.taskService.getTasks().subscribe(
      response => {
        this.tasks = response;
      }
    )
  }

  showAddModal() {
    console.log("Modal Showed up!");
    this.displayAddEditModal = true;
    this.selectedTask = null;
  }


  hideAddModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }

  saveUpdateTaskList(newData: any) {
    console.log("task.component.ID: " + newData.id);
    if (this.selectedTask && newData.id === this.selectedTask.id) {
      console.log('UPDATED');
      const taskIndex = this.tasks.findIndex(data => data.id === newData.id);
      this.tasks[taskIndex] = newData;
    }
    else {
      console.log("ADDED");
      this.tasks.unshift(newData);  // add
    }

  }

  showEditModal(task: any) {
    console.log('edit modal is shown.');
    this.displayAddEditModal = true;
    this.selectedTask = task;
    console.log("Selected Task: showEditModal ", this.selectedTask);
  }

  deleteTask(task: Task) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete the task?',
      accept: () => {
        // Actual logic to perform a confirmation
        this.taskService.deleteTask(task.id).subscribe(
          response => {
            // to show a toast message MessageService is used
            this.tasks = this.tasks.filter(data => data.id != task.id);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Succesfully' });
          },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
          }
        )
      },
    });
  }

  completeTask(task: Task) {
    console.log(task);
    this.taskService.completeTask(task);
  }

  ngOnDestroy(): void {

  }

}
