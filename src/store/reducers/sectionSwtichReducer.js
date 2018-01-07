import * as actionTypes from '../actions/actionTypes';

const initialState = {
	drawer: false,
	peopleList: true
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DRAWER_SECTION_SWITCH:
			return {
				...state,
				drawer: !state.drawer
			};
		default:
			return state;
	}
};

export default reducer;