import * as actionTypes from '../actions/actionTypes'
import reactImg from '../../img/react.png';
import pikaImg from '../../img/pikachu.jpg';

const initialState = {
	people: [
		{id: 1, name: 'Shaowei', age: 25, imageUrl: pikaImg, editMode: false},
		{id: 2, name: 'Kira', age: 22, imageUrl: reactImg, editMode: false},
		{id: 3, name: 'ZSW', age: 18, imageUrl: pikaImg, editMode: false},
		{id: 4, name: 'Shaowei', age: 25, imageUrl: reactImg, editMode: false},
		{id: 5, name: 'Kira', age: 22, imageUrl: pikaImg, editMode: false},
		{id: 6, name: 'ZSW', age: 18, imageUrl: reactImg, editMode: false},
		{id: 7, name: 'Shaowei', age: 25, imageUrl: pikaImg, editMode: false},
		{id: 8, name: 'Kira', age: 22, imageUrl: reactImg, editMode: false},
		{id: 9, name: 'ZSW', age: 18, imageUrl: pikaImg, editMode: false},
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.EDIT_NAME_CARD:
			return editButtonHandler(state, action);
		case actionTypes.SAVE_NAME_CARD:
			return saveButtonHandler(state, action);
		case actionTypes.CANCEL_NAME_CARD:
			return cancelButtonHandler(state, action);
		case actionTypes.FILTER_NAME_CARD:
		case actionTypes.SEARCH_NAME_CARD:
			return searchButtonHandler(state, action);
		default:
			return state
	}
};


const editButtonHandler = (state, action) => {
	return switchEditModeHandler(state, action, 'edit');
};

const cancelButtonHandler = (state, action) => {
	return switchEditModeHandler(state, action, 'cancel');
};

const saveButtonHandler = (state, action) => {
	return switchEditModeHandler(state, action, 'save');
};

const switchEditModeHandler = (state, action, type) => {
	let peopleList = [...state.people];
	let selectedPerson = peopleList.filter(person => {
		return (person.id === action.person.id)
	})[0];
	switch (type) {
		case 'edit':
			selectedPerson.editMode = true;
			break;
		case 'save':
			selectedPerson.editMode = false;
			selectedPerson.name = action.name;
			selectedPerson.age = action.age;
			break;
		case 'cancel':
			selectedPerson.editMode = false;
			break;
		default:
			break;
	}
	return ({
		...state,
		people: peopleList
	});
};

const searchButtonHandler = (state, action) => {

};

export default reducer;