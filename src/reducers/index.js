import { INIT_MENU } from '../constants';

const initialState = {
  items : []
}

function rootReducer(state = initialState, action) {
  if (action.type === INIT_MENU) {
    return Object.assign({}, state, {
      items : state.items.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
