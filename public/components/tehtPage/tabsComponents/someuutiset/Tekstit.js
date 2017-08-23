import React from 'react';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';

const Tekstit = (props) =>
    <div className="tekstit" style="overflow:scroll;">
        <p><b>Tekstit:</b></p>
        {props.texts.map((text) =>
            <div>
                <a onClick={props.selectItem(text.nameId, 'GET_some', text)}>
                    <Basic src={text.url} title={text.name} key={text.nameId} />
                </a>
                {props.buttons.map((b) =>
                    {text.nameId===b.id ? text.isShared=b.isShared : false }
                )}
                <ShareButton onClick={props.clickShare(text.nameId, text)}
                             key={text.nameId}
                             isShared={text.isShared} />
              <p>Sender name:{text.sender}</p>
              <p>Message:{text.message}</p>
              <p>Location:{text.location}</p>
              <p>Hashtags:{text.hasgtags}</p>
              <p>Comments:{text.comments}</p>
                 <a onClick={props.selectItem(text.nameId, 'GET_some', text)}>
                     <Basic src={text.url} title={text.name} key={text.nameId} />
                 </a>
            </div>
        )}
        {console.log(props)}
    </div>;


export default Tekstit;
