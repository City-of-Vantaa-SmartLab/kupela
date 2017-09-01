import React from 'react';
import { connect } from 'react-redux';
import Basic from '../reusables/templates/Basic';
import ShareButton from './ShareButton';
import { showAllNews, showPrioNews } from '../../../../reducer/news/actions';

const Uutiset = (props) =>
    <div className="uutiset">
    <p><b>Kuvat:</b></p>
    <div className="scrollableArea">
    {props.news.newsitems.map((newsitem) =>
        <div className={newsitem.visible === true ? "visible" : "notVisible"}>
        <div className={newsitem.priority === "1" ? "someNews priority" : "someNews nonpriority"}>
            <a onClick={props.selectItem(newsitem.nameId, 'GET_some', newsitem)}>
                <Basic src={newsitem.url} key={newsitem.nameId} />
            </a>


        {props.buttons.map((b) =>
            {newsitem.nameId===b.id ? newsitem.isShared=b.isShared : false }
        )}
        <ShareButton onClick={props.clickShare(newsitem.nameId, 2, newsitem)}
                     url={newsitem.url}
                     key={newsitem.nameId}
                     isShared={newsitem.isShared} />
        </div>
        </div>
    )}
    </div>

    <input className="showAllNewsButton somebtn" type="button" onClick={props.clickShowAllNews()} value="Näytä kaikki"/>
    <input className="showPriorityNewsButton somebtn" type="button" onClick={props.clickShowPriorityNews()} value="Näytä tärkeät"/>
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
