import * as Actions from '../actions';

const initialState = {
	sites: [],
    active: false
};

const widgetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.LOAD_SITES:
			return {
				...state,
				sites: [...action.payload]
			};
		case Actions.SET_ACTIVE_SITE:
			return {
				...state,
				active: action.active,
			};
		default:
			return state;
	}
};

export default widgetsReducer;
