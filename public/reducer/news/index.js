import { LOAD_NEWS, SHOW_ALL_NEWS, SHOW_PRIONEWS_ONLY, SHARED_NEWS_ADDED } from './actions';
import { RECEIVE_DATA } from '../serverConnection/actions';
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
        case RECEIVE_DATA:
          if(action.data.datatype == "newsset") {
            console.log("News received");
            var newmessages = action.data.content.newsitems;
            newmessages.map((c) => {
              if(c.priority === "1" ) {
                c.visible = true;
              }
              else {
                c.visible = false;
              }
            });
            return {
              ...state,
              newsitems: newmessages.concat(state.newsitems)
            }
          }
          return state;
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
        case SHARED_NEWS_ADDED:
          var news = action.news;
          news.isShared = true;
          if(state.sharednews.length > 0) {
            return {
              ...state,
              sharednews: state.sharednews.concat(news)
            }
          }
          else {
            return {
              ...state,
              sharednews: [news]
            }
          }
        default:
            return state;
    }
}
