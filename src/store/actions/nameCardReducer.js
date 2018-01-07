import * as actionTypes from './actionTypes'

export const editNameCard = (person) => {
	return {
		type: actionTypes.EDIT_NAME_CARD,
		client: person
	}
};
export const saveNameCard = (person, pName, pAge) => {
	return {
		type: actionTypes.SAVE_NAME_CARD,
		client: person,
		name: pName,
		age: pAge
	}
};
export const cancelNameCard = (person) => {
	return {
		type: actionTypes.CANCEL_NAME_CARD,
		client: person
	}
};

export const searchNameCard = (input) => {
	return {
		type: actionTypes.SEARCH_NAME_CARD,
		input: input
	}
};