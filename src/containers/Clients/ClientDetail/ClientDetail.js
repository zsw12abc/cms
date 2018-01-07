import React, {Component} from 'react';
import {connect} from 'react-redux'

class ClientDetail extends Component {
	render() {
		return (
			<ClientDetail personDetail={this.props.clientDetail} personList={this.props.clientList}/>
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
	return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetail);
