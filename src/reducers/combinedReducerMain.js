/*

This file is mainly to create good coding by combining the multiple reducers into the same folder and this can be imported in one go in the main file.

*/

import counterReducer from "./counter.reducer";
import isLoggedReducer from "./isLogged.reducer";
import PostReducer from "./posts.reducer";

import {combineReducers} from 'redux';

// the first names are what we will be using to import in other files. So basically keep the names as the name of variables you would like.
const allReducers = combineReducers({
	counter:	counterReducer,
	isLogged: isLoggedReducer,
	allPosts: PostReducer
});

export default allReducers;