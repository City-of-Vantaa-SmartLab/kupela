import React from 'react';
import Basic from '../reusables/templates/Basic';

const Jaetut = (props) =>
    <div className={props.user.usertype === "field" ? "notVisible" : "jaetut" }>
        <p><b>Jaetut:</b></p>
        <div className="scrollableArea">
        {props.shared_info.map((a) =>
              <div className="someText">
                <p className="someSender">{a.content.sender}</p>
                <p className="someMessage">{a.content.message}</p>
                <div className="someOther">
                  <p className="someTime">{a.content.time}</p>
                </div>
                <Basic src={a.content.url} key={a.content.nameId} />
              </div>

            
        )}
        </div>
    </div>;

export default Jaetut;
