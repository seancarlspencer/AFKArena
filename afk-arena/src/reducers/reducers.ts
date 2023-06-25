import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import calendarReducer from './calendarReducer';
import dayReducer from './dayReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  calendar: calendarReducer,
  day: dayReducer
});

export default rootReducer;
