import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import tasksReducer from './tasksReducer';
import filterReducer from './filterReducer';
import { RootState } from '../types';

const rootReducer = combineReducers<RootState>({
  theme: themeReducer,
  tasks: tasksReducer,
  filter: filterReducer,
});

export default rootReducer;
