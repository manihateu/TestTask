import { ThemeState, Action } from '../types';

const themeReducer = (state: ThemeState = 'light', action: Action): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

export default themeReducer;