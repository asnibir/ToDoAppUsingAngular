import * as TaskActions from "./actions";
import { createReducer, on } from "@ngrx/store";
import { TasksState } from "../tasts-state";

// export const taskFeatureKey = 'taskStoreSelector';

export const initialState: TasksState = {
    isLoading: false,
    tasks: [],
    error: null,
}

export const tasksReducer = createReducer(
    initialState,
    on(TaskActions.getTasks, (state) => ({ ...state, isLoading: true })),
    on(TaskActions.getTasksSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        tasks: action.tasks,
    })),
    on(TaskActions.getTasksFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
);