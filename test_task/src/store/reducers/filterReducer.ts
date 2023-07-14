import { FilterState, Action } from '../types';

const filterReducer = (state: FilterState = 'all', action: Action): FilterState => {
  switch (action.type) {
    case 'FILTER_TASKS':
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
