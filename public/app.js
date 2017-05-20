import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { getTehtavat } from './reducer/tehtavat/actions';
import { setTabs } from './reducer/tabs/actions';

//code from: https://scotch.io/courses/getting-started-with-react-and-redux/setting-up-the-redux-store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk),
));

const container = document.querySelector('#app-container');

store.dispatch(getTehtavat());
store.dispatch(setTabs());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <App/>
        </AppContainer>
    </Provider>,
    container
);

if(module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <App/>
                </AppContainer>
            </Provider>,
            container
        );
    });
}