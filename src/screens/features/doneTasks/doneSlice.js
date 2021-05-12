import {storeIdDone} from './../counters/counters';
import {incrementIdDoneAction} from './../actions/actions';

const initialState = [
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

function editTask(id, title, desc, tasks) {
  let item = {title: title, desc: desc, id: id};
  let foundIndex;
  foundIndex = tasks.indexOf(tasks.find(t => t.id === id));
  tasks[foundIndex] = item;
  return tasks;
}

function removeTask(id, tasks) {
  tasks.splice(tasks.indexOf(tasks.find(t => t.id === id)), 1);
  return tasks;
}

function addTask(title, desc, tasks) {
  storeIdDone.dispatch(incrementIdDoneAction());
  tasks.push({title: title, desc: desc, id: storeIdDone.getState().value});
  return tasks;
}

export default function donesReducer(state = initialState, action) {
  switch (action.type) {
    case 'dones/add': {
      return addTask(action.payload.title, action.payload.desc, state);
    }
    case 'dones/remove': {
      return removeTask(action.payload.id, state);
    }
    case 'dones/edit': {
      state = editTask(
        action.payload.id,
        action.payload.title,
        action.payload.desc,
        state,
      );
      return state;
    }
    default:
      return state;
  }
}
