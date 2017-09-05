import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentMission, setMissionProfile } from '../../reducer/mission/actions';

const MissionList = ({ missions, setMission }) =>
    <div id='mission-list' className="frontpageMissionArea scrollableArea">
        <h1>Tehtävät:</h1>
        <ul id="mission-ul">
            {missions.missiondata.map((c, i) =>
                <li className="missionItem" onClick={setMission(c)}
                    key={c.name}>
                    <p>{c.name}</p>
                    <p>Sijainti: {c.location}, Prioriteetti: {c.priority}</p>
                    <Link to={c.priority == "1" ? '/tehtavat/' : '/main/'}><input className="user-btn" type="button" value="Aloita tehtävä"/></Link>
                </li>
            )}
        </ul>
    </div>;

const mapStateToProps = ({ missions }) => ({
    missions
});

const mapDispatchToProps = dispatch => ({
    setMission(mission) {
        return() => {
            dispatch(setCurrentMission(mission.id));
            dispatch(setMissionProfile(mission));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionList);
