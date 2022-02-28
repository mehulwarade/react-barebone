import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/combinedReducerMain'

// Store - needs parameter as the reducer
let store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);
