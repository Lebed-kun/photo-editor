import { OPEN_FILE, UPLOAD_IMAGE } from "../constants/index";
import { invalidFileFormat, initImage } from '../actions/index';

export function openFileMiddleware({ dispatch }) {
  return function(next){
    return function(action){
      if (action.type === OPEN_FILE) {
        const fileInput = action.payload.uploadButton.querySelector('input[type=file]');
        fileInput.click();
      }
      return next(action);
    }
  }
}

export function uploadImageMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      const validExtensions = ['jpg', 'jpeg', 'png', 'bmp'];

      if (action.type === UPLOAD_IMAGE) {
        const reader = new FileReader();
        const file = action.payload.file;

        let extension = file.name.substr((file.name.lastIndexOf('.') + 1));

        if (validExtensions.indexOf(extension) == -1) {
          return dispatch(invalidFileFormat(file.name));
        }

        reader.readAsDataURL(file);

        reader.onloadend = () => {
          dispatch(initImage(reader.result));
        }
      }
      return next(action);
    }
  }
}
