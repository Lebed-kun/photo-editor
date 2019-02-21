import { INIT_MENU, INIT_MAIN_SECTION, INIT_IMAGE,
INVALID_FILE_FORMAT, UNLOCK_MENU, SET_ACTIVE_TAB, SET_FILTER,
SET_COLOR } from '../constants/index'

import { filters } from '../constants/filters';

const initialState = {
  items : [],
  contents : [],
  imageUrl : [],
  isMenuLocked : [],
  activeTab : [],
  filter : [],
  color : []
}

function rootReducer(state = initialState, action) {
  if (action.type === INIT_MENU) {
    return Object.assign({}, state, {
      items : state.items.concat(action.payload),
      isMenuLocked : state.isMenuLocked.concat([true]),
      activeTab : state.activeTab.concat({ name : '' }),
      filter : state.filter.concat(filters.find(el => el.name == 'normal')),
      color : state.color.concat({ color : 0 })
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

  if (action.type === UNLOCK_MENU) {
    return Object.assign({}, state, {
      isMenuLocked : state.isMenuLocked.concat([false])
    })
  }

  if (action.type === SET_ACTIVE_TAB) {
    return Object.assign({}, state, {
      activeTab : state.activeTab.concat(action.payload)
    })
  }

  if (action.type == SET_FILTER) {
    return Object.assign({}, state, {
      filter : state.filter.concat(action.payload)
    })
  }

  if (action.type == SET_COLOR) {
    return Object.assign({}, state, {
      color : state.color.concat(action.payload)
    })
  }
  return state;
}

export default rootReducer;
