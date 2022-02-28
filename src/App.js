import { useSelector, useDispatch } from 'react-redux';

import { increment } from './actions/incrementAction';
import { decrement } from './actions/decrementAction';
import { login } from './actions/loginAction'
import { getAllData } from './actions/GetAllDataAction';

function App() {

	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
	const allposts = useSelector(state => state.allPosts);
	const dispatch = useDispatch();

	// allposts.then((resolvedValue) => {
	// 	console.log(resolvedValue);
	// }, (error) => {
	// 	console.log(error);
	// });


	return (
		<>
			<p>Hi Mehul! Counter: {counter}</p>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>


			{isLogged ? <p> This is something very important and only logged in people can see</p> : 'This is hidden.'}
			<button onClick={() => dispatch(login())}>Log in</button>

			<button onClick={() => dispatch(getAllData())}>Get Posts</button>
			{}
			{}

		</>
	);
}

export default App;
