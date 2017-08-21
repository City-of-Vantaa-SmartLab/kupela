import React from 'react';
import { connect } from 'react-redux';
import { setCurrentMission, getMissionProfile } from '../../reducer/mission/actions';

const MissionList = ({ missions, setMission }) =>
    <div id='mission-list' className="frontpageMissionArea">
        <ul id="mission-ul">
            {missions.map((c, i) =>
                <li onClick={setMission(i + 1)}
                    key={c.name}>
                    <p>{c.name}</p>
                </li>
            )}
        </ul>
    </div>;

const mapStateToProps = ({ missions }) => ({
    missions
});

const mapDispatchToProps = dispatch => ({
    setMission(id) {
        return() => {
            dispatch(setCurrentMission(id));
            dispatch(getMissionProfile(id));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionList);
