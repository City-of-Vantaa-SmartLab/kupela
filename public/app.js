import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { HashRouter, BrowsRouter as Router, Route} from 'react-router-dom';
import { getTehtavat } from './reducer/tehtavat/actions';
import { getTabs } from './reducer/tabs/actions';
import { getPages } from './reducer/pages/actions';
import { getImages } from './reducer/images/actions';
import { getTexts } from './reducer/texts/actions';
import { getNews } from './reducer/news/actions';
import { getSecurityCams } from './reducer/securitycams/actions';
import { getRoadCams } from './reducer/roadcams/actions';
import { getMaps } from './reducer/maps/actions';
import { getStreetViews } from './reducer/streetviews/actions';
import { getFirealarms } from './reducer/firealarms/actions';
import { getSprinklers } from './reducer/sprinklers/actions';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/setting-up-the-redux-store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk),
));

const container = document.querySelector('#app-container');

store.dispatch(getTehtavat());
store.dispatch(getTabs());
store.dispatch(getPages());
store.dispatch(getImages());
store.dispatch(getTexts());
store.dispatch(getNews());
store.dispatch(getSecurityCams());
store.dispatch(getRoadCams());
store.dispatch(getMaps());
store.dispatch(getStreetViews());
store.dispatch(getFirealarms());
store.dispatch(getSprinklers());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <HashRouter>
                <Route path="/" component={App}>

                </Route>
            </HashRouter>
        </AppContainer>
    </Provider>,
    container
);

if(module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <Router history={history}>
                        <Route component={App}/>
                    </Router>
                </AppContainer>
            </Provider>,
            container
        );
    });
}
