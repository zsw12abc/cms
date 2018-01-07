import * as actionTypes from './actionTypes';

export const drawerOpen = () => {
	return {
		type: actionTypes.DRAWER_SECTION_SWITCH
	}
};

export const showClientDetail = (client) => {
	return {
		type: actionTypes.SHOW_DETAIL_NAME_CARD,
		client: client
	}
};

export const cancelClientDetail = () => {
	return {
		type: actionTypes.CANCEL_CLIENT_DETAIL,
	}
};