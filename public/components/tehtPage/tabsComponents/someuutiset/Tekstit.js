import React from 'react';
import { connect } from 'react-redux';
import ShareButton from './ShareButton';
import { showAllTexts, showPrioTexts } from '../../../../reducer/texts/actions';

const Tekstit = (props) =>
    <div className="tekstit">
        <p><b>Viestit:</b></p>
        <input className="showAllTextsButton somebtn" type="button" onClick={props.clickShowAllTexts()} value="Näytä kaikki"/>
        <input className="showPriorityTextsButton somebtn" type="button" onClick={props.clickShowPriorityTexts()} value="Näytä tärkeät"/>

        <div className="scrollableArea">
        {props.texts.messages.map((text) =>
            <div className={text.visible === true ? "visible" : "notVisible"}>
            <div className={text.priority === "1" ? "someText priority" : "someText nonpriority"}>
              <div className="innerSomeText">

                <div className="someTextBlock">
                  <p className="someSender">{text.sender}</p>
                  <p className="someMessage">{text.message}</p>
                  <div className="someOther">
                    <p className="someTime">{text.time}</p>
                  </div>
                </div>

              </div>
              {props.buttons.map((b) =>
                  {text.nameId===b.id ? text.isShared=b.isShared : false }
              )}
              <ShareButton onClick={props.clickShare(text.nameId, "1", text)}
                           key={text.nameId}
                           isShared={text.isShared} />
            </div>
            </div>
        )}
        </div>

    </div>;

const mapDispatchToProps = dispatch => ({
    clickShowAllTexts() {
        return() => {
          dispatch(showAllTexts());
        }
    },
    clickShowPriorityTexts() {
        return() => {
          dispatch(showPrioTexts());
        }
    }
});

export default connect(null, mapDispatchToProps)(Tekstit);


//onClick={props.selectItem(text.id, 'GET_some', text)}
