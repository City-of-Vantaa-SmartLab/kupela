import { LOAD_IMAGES, SHOW_ALL_IMAGES, SHOW_PRIOIMG_ONLY } from '../images/actions';

const initialState = {
    images: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_IMAGES:
          var newimages = action.images;
          newimages.map((c) => {
            if(c.priority === "1" ) {
              c.visible = true;
            }
            else {
              c.visible = false;
            }
          });
          return {
            ...state,
            images: newimages
          }
        case SHOW_ALL_IMAGES:
          var newimages = state.images;
          newimages.map((c) => {
              c.visible = true;
          });
          return {
            ...state,
            images: newimages
          }
        case SHOW_PRIOIMG_ONLY:
          var newimages = state.images;
          newimages.map((c) => {
            if(c.priority === "1" ) {
              c.visible = true;
            }
            else {
              c.visible = false;
            }
          });
          return {
            ...state,
            images: newimages
          }
        default:
            return state;
    }
};
