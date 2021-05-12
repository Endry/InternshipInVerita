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

const addTodoAction = (title, desc) => {
  return {
    type: 'todos/add',
    payload: {title: title, desc: desc},
  };
};
const removeTodoAction = id => {
  return {
    type: 'todos/remove',
    payload: {id: id},
  };
};

const editTodoAction = (id, title, desc) => {
  return {
    type: 'todos/edit',
    payload: {id: id, title: title, desc: desc},
  };
};

const addDoneAction = (title, desc) => {
  return {
    type: 'dones/add',
    payload: {title: title, desc: desc},
  };
};
const removeDoneAction = id => {
  return {
    type: 'dones/remove',
    payload: {id: id},
  };
};

const editDoneAction = (id, title, desc) => {
  return {
    type: 'dones/edit',
    payload: {id: id, title: title, desc: desc},
  };
};

export {
  addTodoAction,
  removeTodoAction,
  incrementIdTodoAction,
  editTodoAction,
  addDoneAction,
  removeDoneAction,
  incrementIdDoneAction,
  editDoneAction,
};
