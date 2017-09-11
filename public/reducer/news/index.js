import { LOAD_NEWS, SHOW_ALL_NEWS, SHOW_PRIONEWS_ONLY } from './actions';
import { SET_INFO_SHARED } from '../tab/actions';

const initialState = {
  newsitems: [],
  sharednews: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
          var newnews = action.news;
          newnews.map((c) => {
            if(c.priority === "1" ) {
              c.visible = true;
            }
            else {
              c.visible = false;
            }
          });
          return {
            ...state,
            newsitems: newnews
          }
        case SHOW_ALL_NEWS:
          var newnews = state.newsitems;
          newnews.map((c) => {
              c.visible = true;
          });
          return {
            ...state,
            newsitems: newnews
          }
        case SHOW_PRIONEWS_ONLY:
          var newnews = state.newsitems;
          newnews.map((c) => {
            if(c.priority === "1" ) {
              c.visible = true;
            }
            else {
              c.visible = false;
            }
          });
          return {
            ...state,
            newsitems: newnews
          }
        case SET_INFO_SHARED:
          if(action.itemtype == 3)
          {
            return {
              ...state,
              sharednews: state.sharednews.concat(action.content)
            }
          }
          else {
            return state;
          }
        default:
            return state;
    }
}
