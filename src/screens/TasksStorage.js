import React from 'react';
import {Text, View} from 'react-native';
import styles from './style/style';
import type {Node} from 'react';

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

var idTodo = 10;
var idDone = 10;

function changeType(type, title, desc, id) {
  removeTask(id, type);
  if (type === 'done') {
    todoTasks.push({title: title, desc: desc, id: ++idTodo});
  } else {
    doneTasks.push({title: title, desc: desc, idDone: ++idTodo});
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
    todoTasks.push({title: title, desc: desc, id: ++idTodo});
  } else {
    doneTasks.push({title: title, desc: desc, id: ++idTodo});
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

export {Section};
export {changeType};
export {editTask};
export {removeTask};
export {addTask};
export {doneTasks};
export {todoTasks};
