import { Action, FilterState } from './types';

// Действия
export const toggleTheme = (): Action => ({
  type: 'TOGGLE_THEME',
});

export const addTask = (text: string): Action => ({
  type: 'ADD_TASK',
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const removeTask = (taskId: number): Action => ({
  type: 'REMOVE_TASK',
  payload: taskId,
});

export const toggleTask = (taskId: number): Action => ({
  type: 'TOGGLE_TASK',
  payload: taskId,
});

export const filterTasks = (filterOption: FilterState): Action => ({
    type: 'FILTER_TASKS',
    payload: filterOption,
  });