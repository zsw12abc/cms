import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import nameCardReducer from './store/reducers/nameCardReducer';
import sectionSwitchReducer from './store/reducers/sectionSwtichReducer';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
	nameCardReducer: nameCardReducer,
	sectionSwitchReducer: sectionSwitchReducer
});

const logger = store => {
	return next => {
		return action => {
			console.log('[MiddleWare] Dispatching', action);
			const result = next(action);
			console.log('[MiddleWare] next state', store.getState());
			return result;
		}
	}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
