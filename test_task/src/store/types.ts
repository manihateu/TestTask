// Типы состояния
export type ThemeState = 'light' | 'dark';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export type TasksState = Task[];

export type FilterState = 'all' | 'completed' | 'uncompleted';

export interface RootState {
  theme: ThemeState;
  tasks: TasksState;
  filter: FilterState;
}

// Действия
interface ToggleThemeAction {
  type: 'TOGGLE_THEME';
}

interface AddTaskAction {
  type: 'ADD_TASK';
  payload: Task;
}

interface RemoveTaskAction {
  type: 'REMOVE_TASK';
  payload: number;
}

interface ToggleTaskAction {
  type: 'TOGGLE_TASK';
  payload: number;
}

interface FilterTasksAction {
  type: 'FILTER_TASKS';
  payload: FilterState;
}

export type Action =
  | ToggleThemeAction
  | AddTaskAction
  | RemoveTaskAction
  | ToggleTaskAction
  | FilterTasksAction;
