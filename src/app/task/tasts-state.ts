import { Task } from "./task";

export interface TasksState {
    isLoading: boolean;
    tasks: Task[];
    error: string | null;
}