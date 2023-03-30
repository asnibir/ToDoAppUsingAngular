import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit, OnChanges {

  @Input() selectedTask: any = null;
  @Input() displayAddEditModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();

  modalType = "Add";

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private messageService: MessageService
  ) { }

  taskForm = this.fb.group({
    userId: ["", Validators.required],
    id: [""],
    title: ["", Validators.required],
    completed: [false]
  });

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.selectedTask) {
      this.modalType = 'Edit';
      this.taskForm.patchValue(this.selectedTask);
    }
    else {
      this.taskForm.reset();
      this.modalType = 'Add';
    }
  }

  closeModal() {
    //console.log("Modal is closed");
    this.taskForm.reset();
    this.clickClose.emit(true);
  }

  addEditTask() {
    if(this.taskForm.valid){
      console.log("Selected Task add-edit-task: " + this.selectedTask);
      this.taskService.addEditTask(this.taskForm.value, this.selectedTask).subscribe(
        response => {
          console.log(response);
          this.clickAddEdit.emit(response);
          this.closeModal();
          const msg = this.modalType === 'Add' ? 'Task added' : 'Task updated';
          this.messageService.add({ severity: 'success', summary: 'Success', detail: msg });
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
          console.log('Errror occured');
        }
      );
    }
  }

}
