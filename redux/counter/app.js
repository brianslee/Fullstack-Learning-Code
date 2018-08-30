function reducer(state, action)
{
	if(action.type === 'INCREMENT')
	{
		return state + action.amount;
	}
	else if(action.type === 'DECREMENT')
	{
		return state - action.amount;
	}
	else
	{
		return state;
	}
}

function createStore(reducer)
{
	let state = 0;

	const getState = () => (state);

	const dispatch = (action) => {
		state = reducer(state, action);
	};

	return{
		getState,
		dispatch,
	};
}

//Tests
/*
const incrementAction = {
	type: 'INCREMENT',
	amount: 5,
};

console.log(reducer(0, incrementAction)); //Result:5
console.log(reducer(1, incrementAction)); //Result:6
console.log(reducer(5, incrementAction)); //Result:10

const decrementAction = {
	type: 'DECREMENT',
	amount: 11,
};

console.log(reducer(100, decrementAction)); //Result:89

const unknownAction = { type: 'UNKNOWN' };

console.log(reducer(5, unknownAction)); //Result:5
console.log(reducer(8, unknownAction)); //Result:8
*/
//store Tests
const store = createStore(reducer);

const incrementAction = {
	type: 'INCREMENT',
	amount: 3,
};

store.dispatch(incrementAction);
console.log(store.getState()); //->3
store.dispatch(incrementAction);
console.log(store.getState()); //->6

const decrementAction = {
	type: 'DECREMENT',
	amount: 4,
};

store.dispatch(decrementAction);
console.log(store.getState()); //->2