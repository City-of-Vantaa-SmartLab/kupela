import React from 'react';
import { connect } from 'react-redux';
import ShareButton from './ShareButton';
import { showAllTexts, showPrioTexts } from '../../../../reducer/texts/actions';

const FieldTekstit = (props) =>
    <div className="tekstit">
        <p><b>Viestit:</b></p>

        {props.texts.sharedmessages.length > 0 ? (
        <div className="scrollableArea">
        {props.texts.sharedmessages.map((text) =>
          <div className={text.isShared === true ? "visible" : "notVisible"}>
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
            </div>
          </div>
        )}
        </div>) : (<p className="someInfoText">Ei vielä jaettuja viestejä.</p>)}

    </div>;

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(FieldTekstit);
