import {combineReducers} from 'redux';

import todosReducer from './features/todoTasks/todosSlice';
import donesReducer from './features/doneTasks/doneSlice';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  dones: donesReducer,
});

export default rootReducer;
