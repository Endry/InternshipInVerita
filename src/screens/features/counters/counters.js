import {configureStore} from '@reduxjs/toolkit';

const InitialIdTodo = {value: 10};
const InitialIdDone = {value: 10};

function counterTodoReducer(state = InitialIdTodo, action) {
  if (action.type === 'counterTodo/increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === 'counterTodo/decrement') {
    return {
      ...state,
      value: state.value - 1,
    };
  }

  return state;
}
function counterDoneReducer(state = InitialIdDone, action) {
  if (action.type === 'counterDone/increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === 'counterDone/decrement') {
    return {
      ...state,
      value: state.value - 1,
    };
  }

  return state;
}

const storeIdTodo = configureStore({reducer: counterTodoReducer});
const storeIdDone = configureStore({reducer: counterDoneReducer});

export {storeIdTodo, storeIdDone};