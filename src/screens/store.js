import {createStore} from 'redux';
import tasksReducer from './features/tasks/tasksSlice';

const store = createStore(tasksReducer);

export default store;