import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/app-state-interface";
import { TasksState } from "../tasts-state";
// import { taskFeatureKey } from "./reducers";

// export const selectTaskState = createFeatureSelector<TasksState>(taskFeatureKey);
export const selectFeature = (state: AppStateInterface) => state.tasks; 

export const isLoadingSelector = createSelector(
    selectFeature, 
    (state) => state.isLoading
);

export const postsSelector = createSelector(
    selectFeature, 
    (state) => state.tasks
);

export const errorSelector = createSelector(
    selectFeature, 
    (state) => state.error
);