import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentMission, setMissionProfile } from '../../reducer/mission/actions';
import { selectMap } from '../../reducer/frontpagemap/actions';

const MissionList = ({ missions, profile, setMission }) =>
    <div id='mission-list' className="frontpageMissionArea">
      <div className="scrollableArea">
        <h1>Tehtävät:</h1>
        <ul className="missionList" id="mission-ul">
            {missions.missiondata.map((c, i) =>
                <li className="missionItem" onClick={setMission(c)}
                    key={c.name}>
                    <p className="missionTitle">{c.name}</p>
                    <p>Sijainti: {c.location}, Prioriteetti: {c.priority}</p>
                </li>
            )}
        </ul>
      </div>
      <Link to={profile.priority == "1" ? '/tehtavat/' : '/main/'}>
        <input className="user-btn" type="button" value={profile.priority == "1" ? 'Aloita tehtävä' : 'Tehtävä ei saatavilla'}/>
      </Link>
    </div>;

const mapStateToProps = ({ missions, mission: { profile } }) => ({
    missions,
    profile
});

const mapDispatchToProps = dispatch => ({
    setMission(mission) {
        return() => {
            dispatch(setCurrentMission(mission.id));
            dispatch(setMissionProfile(mission));
            dispatch(selectMap(mission.id));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionList);
