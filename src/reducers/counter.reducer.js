const initialState = 0; // by default not logged in

// Reducer - a function that returns a object
// we need to have a intial state of the object. can be a temp variable or 0
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			// do something when increment action is called;
			return state + action.param;

		case 'DECREMENT':
			return state - 1;

		default:
			return 0;
	}
}

export default counterReducer;