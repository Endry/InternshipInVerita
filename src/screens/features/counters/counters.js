import {createStore} from 'redux';

const InitialId = {value: 20};

function counterReducer(state = InitialId, action) {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === 'counter/decrement') {
    return {
      ...state,
      value: state.value - 1,
    };
  }

  return state;
}
const storeId = createStore(counterReducer);

export {storeId};