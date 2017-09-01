import { LOAD_TEXTS, SHOW_ALL_TEXTS, SHOW_PRIO_ONLY } from './actions';
import { RECEIVE_DATA } from '../serverConnection/actions';

const initialState = {
    messages: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOAD_TEXTS:
          var newmessages = action.texts;
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
            messages: newmessages
          }
        case RECEIVE_DATA:
          if(action.data.datatype == "messageset") {
            console.log("New messages received");
            var newmessages = action.data.content.messages;
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
              messages: state.messages.concat(newmessages)
            }
          }
          return state;
        case SHOW_ALL_TEXTS:
          var newmessages = state.messages;
          newmessages.map((c) => {
              c.visible = true;
          });
          return {
            ...state,
            messages: newmessages
          }
        case SHOW_PRIO_ONLY:
          var newmessages = state.messages;
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
            messages: newmessages
          }
        default:
            return state;
    }
}
