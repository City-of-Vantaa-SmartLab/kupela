import React from 'react';
import { connect } from 'react-redux';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';
import { showAllNews, showPrioNews } from '../../../../reducer/news/actions';

const Uutiset = (props) =>
    <div className="uutiset">
      <p><b>Uutiset:</b></p>
      <input className="showAllNewsButton somebtn" type="button" onClick={props.clickShowAllNews()} value="Näytä kaikki"/>
      <input className="showPriorityNewsButton somebtn" type="button" onClick={props.clickShowPriorityNews()} value="Näytä tärkeät"/>

      <div className="scrollableArea">
        {props.news.newsitems.map((newsitem) =>
            <div className={newsitem.visible === true ? "visible" : "notVisible"}>
            <div className={newsitem.priority === "1" ? "someNews priority" : "someNews nonpriority"}>
              <div className="innerSomeText">
                <a onClick={props.selectItem(newsitem.nameId, 'GET_some', newsitem)}>
                    <Basic src={newsitem.url} key={newsitem.nameId} />
                </a>
              </div>

            {props.buttons.map((b) =>
                {newsitem.nameId===b.id ? newsitem.isShared=b.isShared : false }
            )}
            <ShareButton onClick={props.clickShare(newsitem.nameId, 3, newsitem)}
                         url={newsitem.url}
                         key={newsitem.nameId}
                         isShared={newsitem.isShared} />
            </div>
            </div>
        )}
      </div>
    </div>;

const mapDispatchToProps = dispatch => ({
    clickShowAllNews() {
        return() => {
          dispatch(showAllNews());
        }
    },
    clickShowPriorityNews() {
        return() => {
          dispatch(showPrioNews());
        }
    }
});

export default connect(null, mapDispatchToProps)(Uutiset);
