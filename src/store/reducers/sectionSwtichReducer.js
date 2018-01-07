import * as actionTypes from '../actions/actionTypes';

const initialState = {
	drawer: false,
	peopleList: true,
	personDetail: {
		person: null,
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
			return showPersonDetailHandler(state, action);
		default:
			return state;
	}
};

const showPersonDetailHandler = (state, action) => {
	let personSelected = state.personDetail;
	personSelected.person = action.person;
	personSelected.display = true;
	console.log(personSelected);
	return {
		...state,
		personDetail: personSelected
	}
};

export default reducer;