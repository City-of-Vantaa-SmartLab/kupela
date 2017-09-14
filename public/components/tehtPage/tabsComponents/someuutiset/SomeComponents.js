import React from 'react';
import { connect } from 'react-redux';
import Tekstit from './Tekstit';
import FieldTekstit from './FieldTekstit';
import Kuvat from './kuvat';
import FieldKuvat from './FieldKuvat';
import Uutiset from './Uutiset';
import FieldUutiset from './FieldUutiset';
import Jaetut from './Jaetut';
import { changeCurrentTemplate } from '../../../../reducer/tab/actions';
import { shareInformation, setSharedButton, addShareableItem } from '../../../../reducer/tab/actions';
import { contentShared } from '../../../../reducer/serverConnection/actions';

const SomeComponents = (props) =>
    <div>
      {props.user.usertype === "field" ? (
        <div className="someuutisetfield">
          <FieldTekstit {...props}/>
          <FieldKuvat {...props}/>
          <FieldUutiset {...props}/>
        </div>
      ) : (
        <div className="someuutiset">
          <Tekstit {...props}/>
          <Kuvat {...props}/>
          <Uutiset {...props}/>
          <Jaetut {...props}/>
        </div>
      )}
    </div>;

const mapStateToProps = ({ user, images, texts, news, tab: { shared_info, buttons} }) => ({
    user,
    images,
    texts,
    news,
    shared_info,
    buttons,
});

const mapDispatchToProps = dispatch => ({
    selectItem(id, type, content) {
        return() => {
            dispatch(changeCurrentTemplate(id, type, content));
        }
    },
    clickShare(id, type, content) {
        return() => {
            dispatch(addShareableItem(id));
            dispatch(shareInformation(id, type, content));
            dispatch(setSharedButton(id));
            if(type == "1") {
              dispatch(contentShared(content, "text"));
            }
            else if(type == "2") {
              dispatch(contentShared(content, "image"));
            }
            else if(type == "3") {
              dispatch(contentShared(content, "news"));
            }

        }
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(SomeComponents);
