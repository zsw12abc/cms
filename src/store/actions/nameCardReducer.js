import * as actionTypes from './actionTypes'

export const editNameCard = (person) => {
	return {
		type: actionTypes.EDIT_NAME_CARD,
		person: person
	}
};
export const saveNameCard = (person, pName, pAge) => {
	return {
		type: actionTypes.SAVE_NAME_CARD,
		person: person,
		name: pName,
		age: pAge
	}
};
export const cancelNameCard = (person) => {
	return {
		type: actionTypes.CANCEL_NAME_CARD,
		person: person
	}
};

export const searchNameCard = (name) => {
	return {
		type: actionTypes.SEARCH_NAME_CARD,
		name: name
	}
};