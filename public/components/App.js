import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.css';

const App = (props) =>
    <div className="container">
        <ul className="header">
            <li><Link to="/tehtava">Tehtävä</Link></li>
            <li><Link to="/pohjapiirrustus">Pohjapiirrustus</Link></li>
            <li><Link to="/some">Some ja uutiset</Link></li>
            <li><Link to="/kuvat">Kuvat ja videot</Link></li>
            <li><Link to="/dokumentaatio">Dokumentaatio</Link></li>
        </ul>
        <div className="content">
            { props.children }
        </div>
    </div>;

export default App;