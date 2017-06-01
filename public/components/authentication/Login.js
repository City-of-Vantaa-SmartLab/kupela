import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => (
    <div>
        <div>
            <ul>
                <li>
                    <Link to="/login">Kirjaudu sisään</Link>
                </li>
            </ul>

        </div>
    </div>
);

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({

});

export default Login;