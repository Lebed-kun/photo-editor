import { INIT_MENU, INIT_MAIN_SECTION, INIT_IMAGE,
INVALID_FILE_FORMAT } from '../constants/index';

const initialState = {
  items : [],
  contents : [],
  imageUrl : []
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

  if (action.type === INIT_IMAGE) {
    return Object.assign({}, state, {
      imageUrl : state.imageUrl.concat(action.payload)
    });
  }

  if (action.type === INVALID_FILE_FORMAT) {
    alert('Wrong file format!');
  }
  return state;
}

export default rootReducer;
