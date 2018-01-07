import * as actionTypes from '../actions/actionTypes';

const initialState = {
	drawer: false,
	clientList: true,
	clientDetail: {
		client: null,
		display: false
	}
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
	let personSelected = state.clientDetail;
	personSelected.client = action.client;
	personSelected.display = true;
	console.log(personSelected);
	return {
		...state,
		clientList: false,
		clientDetail: personSelected
	}
};

const cancelClientDetailHandler = (state, action) => {
	let clientDetail = state.clientDetail;
	clientDetail.display = false;
	clientDetail.client = null;
	return {
		...state,
		clientList: true,
		clientDetail: clientDetail
	}
};

export default reducer;