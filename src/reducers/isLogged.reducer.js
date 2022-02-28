const initialState = false; // by default not logged in

// Reducer - a function that returns a object
// we need to have a intial state of the object. can be a temp variable or 0
const isLoggedReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			// do something when increment action is called;
			return !state;
		
		default:
			return initialState;
	}
}

export default isLoggedReducer;