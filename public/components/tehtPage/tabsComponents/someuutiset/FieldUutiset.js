import React from 'react';
import { connect } from 'react-redux';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';
import { showAllNews, showPrioNews } from '../../../../reducer/news/actions';

const FieldUutiset = (props) =>
    <div className="uutiset">
      <p><b>Uutiset:</b></p>

      {props.news.sharednews.length > 0 ? (
      <div className="scrollableArea">
        {props.news.sharednews.map((newsitem) =>
            <div className={newsitem.priority === "1" ? "someNews priority" : "someNews nonpriority"}>
              <div className="innerSomeText">
                <a onClick={props.selectItem(newsitem.nameId, 'GET_some', newsitem)}>
                    <Basic src={newsitem.url} key={newsitem.nameId} />
                </a>
              </div>
            </div>
        )}
      </div>) : (<p className="someInfoText">Ei vielä jaettuja uutisia.</p>)}
    </div>;

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(FieldUutiset);
