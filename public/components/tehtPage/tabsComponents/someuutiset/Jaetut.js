import React from 'react';
import Basic from '../reusables/templates/Basic';

const Jaetut = (props) =>
    <div className="jaetut">
        <p><b>Jaetut:</b></p>
        <div className="scrollableArea">
        {props.shared_info.map((a) =>
            <a onClick={props.selectItem(a.id, 'GET_some', a.content)}>
              <div className="someText">
                <p className="someSender">{a.content.sender}</p>
                <p className="someMessage">{a.content.message}</p>
                <div className="someOther">
                  <p className="someTime">{a.content.time}</p>
                  <p className="someLoc">{a.content.location}</p>
                </div>
                <Basic src={a.content.url} key={a.content.nameId} />
              </div>

            </a>
        )}
        </div>
    </div>;

export default Jaetut;
