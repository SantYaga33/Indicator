export const saveState = (state) => {
	let stateAsString = JSON.stringify (state);
	localStorage.setItem ('our-state', stateAsString);
};

export const restoreState = (currentState) => {
	let state;
	let stateAsString = localStorage.getItem ('our-state' );
	if ( stateAsString !== null ) {
		state = JSON.parse (stateAsString);
		return state;
	}
	 return currentState;
};