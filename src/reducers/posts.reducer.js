import axios from 'axios';
// Reducer - a function that returns a object
// we need to have a intial state of the object. can be a temp variable or 0


const PostReducer = async (state = [], action) => {
	switch (action.type) {
		case 'GET_ALL_DATA':

			await axios.get(`https://jsonplaceholder.typicode.com/posts`)
				.then(res => {
					console.log(res.data);
					state = res.data;
				})
			console.log(state);
			return state;

			console.log(state);
			return state;

		case 'FILTER_DATA':
			return state - 1;

		default:
			return 0;
	}
}

export default PostReducer;

