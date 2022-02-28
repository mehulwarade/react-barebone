import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// REDUX
import { createStore } from 'redux';

// Action - a function that returns a object
const increment = () => {
	return {
		type: 'INCREMENT' // this name can be anything.
	}
}

const decrement = () => {
	return {
		type: 'DECREMENT' // this name can be anything.
	}
}

// Reducer - a function that returns a object
// we need to have a intial state of the object. can be a temp variable or 0
const counter = (state = 4, action) => {
	switch (action.type) {
		case 'INCREMENT':
			// do something when increment action is called;
			return state + 1;

		case 'DECREMENT':
			return state - 1;

		default:
			return;
	}
}

// Store - needs parameter as the reducer
let store = createStore(counter);

// Dispalying in console
store.subscribe(() => console.log(store.getState()));

// Dispatch - to actually execute the action
store.dispatch(increment());




ReactDOM.render(<App />, document.getElementById('root'));
