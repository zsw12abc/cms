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
			return editButtonHandler(action.person);
		case actionTypes.SAVE_NAME_CARD:
			return saveButtonHandler(action.person, action.name, action.age);
		case actionTypes.CANCEL_NAME_CARD:
			return cancelButtonHandler(action.person);
		default:
			return state
	}
};


const editButtonHandler = (p) => {
	switchEditModeHandler(p, 'edit');
};

const cancelButtonHandler = (p) => {
	switchEditModeHandler(p, 'cancel');
};

const saveButtonHandler = (p, pName, pAge) => {
	switchEditModeHandler(p, 'save', pName, pAge);
};


const switchEditModeHandler = (p, type, pName = null, pAge = null) => {
	let peopleList = [...this.state.people];
	let selectedPerson = peopleList.filter(person => {
		return (person.id === p.id)
	})[0];
	switch (type) {
		case 'edit':
			selectedPerson.editMode = true;
			break;
		case 'save':
			selectedPerson.editMode = false;
			selectedPerson.name = pName;
			selectedPerson.age = pAge;
			break;
		case 'cancel':
			selectedPerson.editMode = false;
			break;
		default:
			break;
	}
	return ({
		...this.state,
		people: peopleList
	});
};

export default reducer;