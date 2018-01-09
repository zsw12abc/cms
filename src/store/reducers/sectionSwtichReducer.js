import * as actionTypes from '../actions/actionTypes';

const initialState = {
	drawer: false,
	clientDetail: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.DRAWER_SECTION_SWITCH:
			return {
				...state,
				drawer: !state.drawer
			};
		case actionTypes.SHOW_DETAIL_NAME_CARD:
			return showClientDetailHandler(state, action);
		case actionTypes.CANCEL_CLIENT_DETAIL:
			return cancelClientDetailHandler(state, action);
		default:
			return state;
	}
};

const showClientDetailHandler = (state, action) => {
	return {
		...state,
		clientDetail: action.client
	}
};

const cancelClientDetailHandler = (state, action) => {
	return {
		...state,
		clientDetail: null
	}
};

export default reducer;