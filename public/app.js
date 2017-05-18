import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import Tehtava from './components/Tehtava';
import Pohjapiirrustus from './components/Pohjapiirrustus';
import Some from './components/Some';
import Kuvat from './components/Kuvat';
import Dokumentaatio from './components/Dokumentaatio';

require('./index.html');

const store = createStore(reducer);

const container = document.querySelector('#app-container');

render(
    <Provider store={store}>
        <AppContainer>
            <Router>
                <Route path="/" component={App}>
                    <Route path="/tehtava" component={Tehtava}/>
                    <Route path="/pohjapiirrustus" component={Pohjapiirrustus}/>
                    <Route path="/some" component={Some}/>
                    <Route path="/kuvat" component={Kuvat}/>
                    <Route path="/dokumentaatio" component={Dokumentaatio}/>
                </Route>
            </Router>
        </AppContainer>
    </Provider>,
    container
);

if(module.hot) {
    module.hot.accept('./components/App', () => {
        render(
            <Provider store={store}>
                <AppContainer>
                    <Router>
                        <Route path="/" component={App}>
                            <Route path="/tehtava" component={Tehtava}/>
                            <Route path="/pohjapiirrustus" component={Pohjapiirrustus}/>
                            <Route path="/some" component={Some}/>
                            <Route path="/kuvat" component={Kuvat}/>
                            <Route path="/dokumentaatio" component={Dokumentaatio}/>
                        </Route>
                    </Router>
                </AppContainer>
            </Provider>,
            container
        );
    });
}