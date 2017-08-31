import React from 'react';
import { connect } from 'react-redux';
import ShareButton from './ShareButton';

const Tekstit = (props) =>
    <div className="tekstit">
        <p><b>Viestit:</b></p>
        {props.texts.map((text) =>
          <div className={text.priority === "1" ? "someText priority" : "someText nonpriority"}>
            <a onClick={props.selectItem(text.id, 'GET_some', text)}>
              <div className="someTextBlock">
                <p className="someSender">{text.sender}</p>
                <p className="someMessage">{text.message}</p>
                <div className="someOther">
                  <p className="someTime">{text.time}</p>
                  <p className="someLoc">{text.location}</p>
                </div>
              </div>
            </a>
            {props.buttons.map((b) =>
                {text.nameId===b.id ? text.isShared=b.isShared : false }
            )}
            <ShareButton onClick={props.clickShare(text.nameId, text)}
                         key={text.nameId}
                         isShared={text.isShared} />
          </div>
        )}

        <input className="showAllTextsButton visible somebtn" type="button" onClick={props.clickShowAllTexts()} value="Näytä kaikki"/>
        <input className="showPriorityTextsButton notVisible somebtn" type="button" onClick={props.clickShowPriorityTexts()} value="Näytä tärkeät"/>

    </div>;

const mapDispatchToProps = dispatch => ({
    clickShowAllTexts(id, type, content) {
        return() => {

        }
    },
    clickShowPriorityTexts(id, content) {
        return() => {

        }
    }
});

export default connect(null, mapDispatchToProps)(Tekstit);
