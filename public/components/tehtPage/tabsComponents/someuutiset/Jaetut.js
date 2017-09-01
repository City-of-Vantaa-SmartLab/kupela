import React from 'react';

const Jaetut = (props) =>
    <div className="jaetut">
        <p><b>Jaetut:</b></p>
        {props.shared_info.map((a) =>
          <a onClick={props.selectItem(a.id, 'GET_some', a.content)}>
            <div className="someText">
              <p className="someSender">{a.content.sender}</p>
              <p className="someMessage">{a.content.message}</p>
              <div className="someOther">
                <p className="someTime">{a.content.time}</p>
                <p className="someLoc">{a.content.location}</p>
              </div>
            </div>
          </a>
        )}
    </div>;

export default Jaetut;
