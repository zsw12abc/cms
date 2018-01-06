import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import nameCardReducer from './store/reducers/nameCardReducer';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
	nameCardReducer: nameCardReducer,
});
const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
