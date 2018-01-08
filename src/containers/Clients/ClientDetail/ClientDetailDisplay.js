import React, {Component} from 'react';
import {connect} from 'react-redux'
import ClientDetail from "../../../components/ClientList/ClientDetail/ClientDetail";
import * as actions from '../../../store/actions/index'

class ClientDetailDisplay extends Component {
	render() {
		return (
			<ClientDetail
				clientDetail={this.props.clientDetail}
				clientList={this.props.clientList}
				cancelButtonClicked={this.props.onCancelClientDetailCounter}
				deleteButtonClicked={this.props.onDeleteClientDetailCounter}
			/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		clientList: state.sectionSwitchReducer.clientList,
		clientDetail: state.sectionSwitchReducer.clientDetail
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCancelClientDetailCounter: () => dispatch(actions.cancelClientDetail()),
		onDeleteClientDetailCounter: (client) => dispatch(actions.deleteClientDetail(client))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailDisplay);
