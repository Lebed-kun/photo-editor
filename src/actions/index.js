import { INIT_MENU, INIT_MAIN_SECTION, OPEN_FILE,
  UPLOAD_IMAGE, INVALID_FILE_FORMAT, INIT_IMAGE }
from '../constants/index';

export function initMenu(payload) {
  return { type : INIT_MENU, payload }
}

export function initMainSection(payload) {
  return { type : INIT_MAIN_SECTION, payload }
}

export function openFile(payload) {
  return { type : OPEN_FILE, payload }
}

export function uploadImage(payload) {
  return { type : UPLOAD_IMAGE, payload }
}

export function invalidFileFormat() {
  return { type : INVALID_FILE_FORMAT }
}

export function initImage(payload) {
  return { type : INIT_IMAGE, payload }
}
