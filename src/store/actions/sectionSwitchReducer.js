import * as actionTypes from './actionTypes';

export const drawerOpen = () => {
	return {
		type: actionTypes.DRAWER_SECTION_SWITCH
	}
};

export const showPersonDetail = (person) => {
	return {
		type: actionTypes.SHOW_DETAIL_NAME_CARD,
		person: person
	}
};