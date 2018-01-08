import * as actionTypes from '../actions/actionTypes'
import reactImg from '../../img/react.png';
import pikaImg from '../../img/pikachu.jpg';

const initialState = {
	people: [
		{
			id: '1',
			name: 'Shaowei',
			age: 25,
			imageUrl: pikaImg,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
			editMode: false,
			display: true
		},
		{
			id: '2', name: 'Kira', age: 22, imageUrl: reactImg, editMode: false, display: true,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
		},
		{
			id: '3', name: 'ZSW', age: 18, imageUrl: pikaImg, editMode: false, display: true,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
		},
		{
			id: '4', name: 'Shaowei', age: 25, imageUrl: reactImg, editMode: false, display: true,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
		},
		{
			id: '5', name: 'Kira', age: 22, imageUrl: pikaImg, editMode: false, display: true,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
		},
		{
			id: '6', name: 'ZSW', age: 18, imageUrl: reactImg, editMode: false, display: true,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
		},
		{
			id: '7', name: 'Shaowei', age: 25, imageUrl: pikaImg, editMode: false, display: true,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
		},
		{
			id: '8', name: 'Kira', age: 22, imageUrl: reactImg, editMode: false, display: true,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
		},
		{
			id: '9', name: 'ZSW', age: 18, imageUrl: pikaImg, editMode: false, display: true,
			address: 'Melbourne, VIC, 3000',
			phone: '390000000',
			mobile: '0400000000',
			company: 'Microsoft',
		},
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
	let selectedList = peopleList.filter(person => {
		return (person.id === action.client.id)
	});
	let person;
	let selectedPerson = null;
	for (person in selectedList) {
		selectedPerson = selectedList[person];
	}
	switch (type) {
		case 'edit':
			selectedPerson.editMode = true;
			break;
		case 'save':
			selectedPerson.editMode = false;
			selectedPerson.name = action.name;
			selectedPerson.age = action.age;
			selectedPerson.mobile = action.mobile;
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
	let peopleList = [...state.people];
	let notSelectedList = peopleList.filter(person => {
		if (action.input === null) {
			return null;
		}
		if (isNaN(action.input)) {
			return (person.name.toLowerCase().indexOf(action.input.toLowerCase()) === -1);
		} else {
			return (person.id.indexOf(action.input) === -1)
		}
	});
	let notIncludedPerson;
	for (notIncludedPerson in notSelectedList) {
		notSelectedList[notIncludedPerson].display = false;
	}
	let selectedList = peopleList.filter(person => {
		if (action.input === null) return peopleList;
		if (isNaN(action.input)) {
			return (person.name.toLowerCase().indexOf(action.input.toLowerCase()) !== -1);
		} else {
			return (person.id.indexOf(action.input) !== -1)
		}
	});
	let includedPerson;
	for (includedPerson in selectedList) {
		selectedList[includedPerson].display = true;
	}
	return ({
		...state,
		people: peopleList
	})
};

export default reducer;