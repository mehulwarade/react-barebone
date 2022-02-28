import { useSelector, useDispatch } from 'react-redux';

import { increment } from './actions/incrementAction';
import { decrement } from './actions/decrementAction';
import { login } from './actions/loginAction'

function App() {

	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
	const dispatch = useDispatch();

	return (
		<>
			<p>Hi Mehul! Counter: {counter}</p>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>


			{isLogged ? <p> This is something very important and only logged in people can see</p> : 'This is hidden.'}
			<button onClick={() => dispatch(login())}>Log in</button>

		</>
	);
}

export default App;
