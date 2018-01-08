import * as actionTypes from './actionTypes'

export const editNameCard = (person) => {
	return {
		type: actionTypes.EDIT_NAME_CARD,
		client: person
	}
};
export const saveNameCard = (person, pName, pAge, pMobile) => {
	return {
		type: actionTypes.SAVE_NAME_CARD,
		client: person,
		name: pName,
		age: pAge,
		mobile: pMobile
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

export const deleteClientDetail = (person) => {
	return {
		type: actionTypes.DELETE_CLIENT_DETAIL,
		person: person
	}
};