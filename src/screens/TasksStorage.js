import React from 'react';
import {Text, View} from 'react-native';
import styles from './../assets/style/style';
import type {Node} from 'react';
import {configureStore} from '@reduxjs/toolkit';
import Icon from 'react-native-vector-icons/AntDesign';

var todoTasks = [
  {title: 'Devin', desc: 'Devin description', id: 1},
  {title: 'Dan', desc: 'Dan description', id: 2},
  {title: 'Dominic', desc: 'Dominic description', id: 3},
  {title: 'Jackson', desc: 'Jackson description', id: 4},
  {title: 'James', desc: 'James description', id: 5},
  {title: 'Joel', desc: 'Joel description', id: 6},
  {title: 'John', desc: 'John description', id: 7},
  {title: 'Jillian', desc: 'Jillian description', id: 8},
  {title: 'Jimmy', desc: 'Jimmy description', id: 9},
  {title: 'Julie', desc: 'Julie description', id: 10},
];
var doneTasks = [
  {title: 'Devin', desc: 'Devin description', id: 1},
  {title: 'Dan', desc: 'Dan description', id: 2},
  {title: 'Dominic', desc: 'Dominic description', id: 3},
  {title: 'Jackson', desc: 'Jackson description', id: 4},
  {title: 'James', desc: 'James description', id: 5},
  {title: 'Joel', desc: 'Joel description', id: 6},
  {title: 'John', desc: 'John description', id: 7},
  {title: 'Jillian', desc: 'Jillian description', id: 8},
  {title: 'Jimmy', desc: 'Jimmy description', id: 9},
  {title: 'Julie', desc: 'Julie description', id: 10},
];

const incrementIdTodoAction = {
  type: 'counterTodo/increment',
};
const incrementIdDoneAction = {
  type: 'counterDone/increment',
};
const decrementIdTodoAction = {
  type: 'counterTodo/decrement',
};
const decrementIdDoneAction = {
  type: 'counterDone/decrement',
};

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

function changeType(type, title, desc, id) {
  removeTask(id, type);
  if (type === 'done') {
    storeIdTodo.dispatch(incrementIdTodoAction);
    storeIdDone.dispatch(decrementIdDoneAction);
    todoTasks.push({title: title, desc: desc, id: storeIdTodo.getState()});
  } else {
    storeIdDone.dispatch(incrementIdTodoAction);
    storeIdTodo.dispatch(decrementIdDoneAction);
    doneTasks.push({title: title, desc: desc, idDone: storeIdDone.getState()});
  }
}

function editTask(id, type, title, desc) {
  let item = {title: title, desc: desc, type: type, id: id};
  let foundIndex;
  if (type === 'todo') {
    foundIndex = todoTasks.indexOf(todoTasks.find(t => t.id === id));
    todoTasks[foundIndex] = item;
  } else {
    foundIndex = doneTasks.find(t => t.id === id);
    doneTasks[foundIndex] = item;
  }
}

function removeTask(id, type) {
  if (type === 'todo') {
    todoTasks.splice(todoTasks.indexOf(todoTasks.find(t => t.id === id)), 1);
  } else {
    doneTasks.splice(doneTasks.indexOf(doneTasks.find(t => t.id === id)), 1);
  }
}

function addTask(type, title, desc) {
  if (type === 'todo') {
    storeIdTodo.dispatch(incrementIdTodoAction);
    todoTasks.push({title: title, desc: desc, id: storeIdTodo.getState()});
  } else {
    storeIdTodo.dispatch(incrementIdTodoAction);
    doneTasks.push({title: title, desc: desc, idDone: storeIdDone.getState()});
  }
}

const Section = ({children, title}): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

export {
  Section,
  changeType,
  editTask,
  removeTask,
  addTask,
  doneTasks,
  todoTasks,
};
