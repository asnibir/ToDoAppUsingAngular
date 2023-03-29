import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  addEditTask(postData: any, selectedTask: any) {
    console.log("Selected Task in service: " + selectedTask);
    if (!selectedTask) {
      console.log("THIS IS ADD");
      console.log("postData: " + postData);
      return this.http.post(this.url, postData);
    }
    else {
      console.log("THIS IS UPDATED");
      return this.http.patch(`${this.url}/${selectedTask.id}`, postData); // different url?
    }

  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.url}/${taskId}`);
  }

  completeTask(task: Task) {
    this.http.patch(`${this.url}/${task.id}`, task)
      .subscribe(response => {
        console.log(response);
      },
        error => {
          console.log(" error occured. ");
        })
  }

}
