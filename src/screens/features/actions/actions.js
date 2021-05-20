const incrementIdAction = () => {
  return {type: 'counter/increment'};
};

const decrementIdAction = () => {
  return {type: 'counter/decrement'};
};

const addTaskAction = (title, desc, type) => {
  return {
    type: 'tasks/add',
    payload: {title: title, desc: desc, type: type},
  };
};
const removeTaskAction = id => {
  return {
    type: 'tasks/remove',
    payload: {id: id},
  };
};

const editTaskAction = (id, title, desc, type) => {
  return {
    type: 'tasks/edit',
    payload: {id: id, title: title, desc: desc, type: type},
  };
};

const changeTaskTypeAction = (type, title, desc, id) => {
  return {
    type: 'tasks/changeType',
    payload: {id: id, title: title, desc: desc, type: type},
  };
};

export {
  addTaskAction,
  removeTaskAction,
  incrementIdAction,
  decrementIdAction,
  editTaskAction,
  changeTaskTypeAction,
};
