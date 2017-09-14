import { LOAD_IMAGES, SHOW_ALL_IMAGES, SHOW_PRIOIMG_ONLY, SHARED_IMAGE_ADDED } from '../images/actions';
import { RECEIVE_DATA } from '../serverConnection/actions';
import { SET_INFO_SHARED } from '../tab/actions';

const initialState = {
    images: [],
    sharedimages: []
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
        case RECEIVE_DATA:
          if(action.data.datatype == "imageset") {
            console.log("Images received");
            var newimages = action.data.content.images;
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
              images: newimages.concat(state.images)
            }
          }
          return state;
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
        case SET_INFO_SHARED:
          if(action.itemtype == 2)
          {
            return {
              ...state,
              sharedimages: state.sharedimages.concat(action.content)
            }
          }
          else {
            return state;
          }
        case SHARED_IMAGE_ADDED:
          var img = action.image;
          img.isShared = true;
          if(state.sharedimages.length > 0) {
            return {
              ...state,
              sharedimages: state.sharedimages.concat(img)
            }
          }
          else {
            return {
              ...state,
              sharedimages: [img]
            }
          }
        default:
            return state;
    }
};
