import { LOAD_NEWS, SHOW_ALL_NEWS, SHOW_PRIONEWS_ONLY } from './actions';

const initialState = {
  newsitems: []
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
        default:
            return state;
    }
}
