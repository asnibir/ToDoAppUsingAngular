import { Injectable} from '@angular/core';
import * as TasksAction from './actions';
import { TaskService } from '../task.service';
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TasksEffects {
    constructor(private actions$: Actions, private tasksService: TaskService){}
    getTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TasksAction.getTasks),
            mergeMap(() => {
                return this.tasksService.getTasks().pipe(
                    map((tasks) => TasksAction.getTasksSuccess({tasks})), 
                    catchError((error) => 
                    of(TasksAction.getTasksFailure({ error: error.message }))
                    )
                );
            })
        )
    );
}