import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import tasksReducer from './features/tasks/tasksSlice';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const authPersistConfig = {
  key: 'tasks',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  tasks: persistReducer(authPersistConfig, tasksReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
