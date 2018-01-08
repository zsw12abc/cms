import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClientCardsDisplay from './Clients/ClientCardsDisplay';
import ClientDetailDisplay from './Clients/ClientDetail/ClientDetailDisplay';


class MainContent extends Component {
	render() {
		let mainContent = null;
		let styles = this.props.drawer ?
			'col-12 col-md-9 col-xl-10 bd-content' : 'col-12 col-md-12 col-xl-12 bd-content';
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
			<div className={styles}>
				{mainContent}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		clientList: state.sectionSwitchReducer.clientList,
		clientDetail: state.sectionSwitchReducer.clientDetail,
		drawer: state.sectionSwitchReducer.drawer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
