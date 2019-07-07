import { useState } from 'react';

const useDataFieldState = defaultState => {
	const [state, setState] = useState({
		value: defaultState,
		isInvalid: false
	});

	const setDataFieldState = (newValue) => {
		setState({
			...state,
			value: newValue
		});
	}

	return [state, setState]
};
export default useDataFieldState;
