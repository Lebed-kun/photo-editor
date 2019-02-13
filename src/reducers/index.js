import { INIT_MENU, INIT_MAIN_SECTION } from '../constants';

const initialState = {
  items : [],
  contents : []
}

function rootReducer(state = initialState, action) {
  if (action.type === INIT_MENU) {
    return Object.assign({}, state, {
      items : state.items.concat(action.payload)
    });
  }

  if (action.type === INIT_MAIN_SECTION) {
    return Object.assign({}, state, {
      contents : state.contents.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
