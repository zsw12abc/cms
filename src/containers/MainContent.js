import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClientCardsDisplay from './Clients/ClientCardsDisplay';
import ClientDetailDisplay from './Clients/ClientDetail/ClientDetailDisplay';


class MainContent extends Component {
	render() {
		let mainContent = null;
		if (this.props.clientList) {
			mainContent = (
				<ClientCardsDisplay/>
			)
		}
		if (this.props.clientDetail.display) {
			mainContent = (
				<ClientDetailDisplay/>
			)
		}
		return (
			<div>
				{mainContent}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		clientList: state.sectionSwitchReducer.clientList,
		clientDetail: state.sectionSwitchReducer.clientDetail
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
