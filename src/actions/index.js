import { INIT_MENU, INIT_MAIN_SECTION } from '../constants';

export function initMenu(payload) {
  return { type : INIT_MENU, payload }
}

export function initMainSection(payload) {
  return { type : INIT_MAIN_SECTION, payload }
}
