import {storeId} from './../counters/counters';
import {incrementIdAction} from './../actions/actions';

const initialState = [
  {title: 'Todo', desc: 'Todo description', id: 0, type: 'todo'},
  {title: 'Devin', desc: 'Devin description', id: 1, type: 'todo'},
  {title: 'Dan', desc: 'Dan description', id: 2, type: 'todo'},
  {title: 'Dominic', desc: 'Dominic description', id: 3, type: 'todo'},
  {title: 'Jackson', desc: 'Jackson description', id: 4, type: 'todo'},
  {title: 'James', desc: 'James description', id: 5, type: 'todo'},
  {title: 'Joel', desc: 'Joel description', id: 6, type: 'todo'},
  {title: 'John', desc: 'John description', id: 7, type: 'todo'},
  {title: 'Jillian', desc: 'Jillian description', id: 8, type: 'todo'},
  {title: 'Jimmy', desc: 'Jimmy description', id: 9, type: 'todo'},
  {title: 'Julie', desc: 'Julie description', id: 10, type: 'todo'},
  {title: 'Devin', desc: 'Devin description', id: 11, type: 'done'},
  {title: 'Dan', desc: 'Dan description', id: 12, type: 'done'},
  {title: 'Dominic', desc: 'Dominic description', id: 13, type: 'done'},
  {title: 'Jackson', desc: 'Jackson description', id: 14, type: 'done'},
  {title: 'James', desc: 'James description', id: 15, type: 'done'},
  {title: 'Joel', desc: 'Joel description', id: 16, type: 'done'},
  {title: 'John', desc: 'John description', id: 17, type: 'done'},
  {title: 'Jillian', desc: 'Jillian description', id: 18, type: 'done'},
  {title: 'Jimmy', desc: 'Jimmy description', id: 19, type: 'done'},
  {title: 'Julie', desc: 'Julie description', id: 20, type: 'done'},
];

function editTask(id, title, desc, type, tasks) {
  let item = {title: title, desc: desc, id: id, type: type};
  tasks = removeTask(id, tasks);

  return [...tasks, item];
}

function removeTask(id, tasks) {
  tasks.splice(tasks.indexOf(tasks.find(t => t.id === id)), 1);
  return tasks;
}

function addTask(title, desc, type, tasks) {
  console.log('storeId.getState()');
  storeId.dispatch(incrementIdAction());
  console.log(tasks);
  return [
    ...tasks,
    {title: title, desc: desc, id: storeId.getState().value, type: type},
  ];
}

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'tasks/add': {
      console.log('add');
      return addTask(
        action.payload.title,
        action.payload.desc,
        action.payload.type,
        state,
      );
    }
    case 'tasks/remove': {
      return removeTask(action.payload.id, state);
    }
    case 'tasks/edit': {
      state = editTask(
        action.payload.id,
        action.payload.title,
        action.payload.desc,
        action.payload.type,
        state,
      );
      return state;
    }
    default:
      return state;
  }
}
