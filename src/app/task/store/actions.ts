import { Task } from "../task";
import { createAction, props } from '@ngrx/store';

export const getTasks = createAction('[Task] Get Tasks') // [Module] action name;
export const getTasksSuccess = createAction(
    '[Task] Get Tasks Success',
    props<{tasks: Task[]}>()
);
export const getTasksFailure = createAction(
    '[Task] Get Tasks Failure',
    props<{error: string}>()
);