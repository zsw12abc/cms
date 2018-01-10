import React, {Component} from 'react';
import {connect} from 'react-redux'
import ClientDetail from "../../../components/ClientList/ClientDetail/ClientDetail";
import * as actions from '../../../store/actions/index'

class ClientDetailDisplay extends Component {
	render() {
		console.log(this.props);
		let selectedPerson = null;
		if (this.props.match.params.id) {
			selectedPerson = this.props.clientDatabase.filter(person => {
				return person.id === this.props.match.params.id;
			})[0];
		} else {
			selectedPerson = this.props.clientDetail;
		}
		console.log(selectedPerson);
		return (
			<ClientDetail
				clientDetail={selectedPerson}
				// cancelButtonClicked={this.props.onCancelClientDetailCounter}
				cancelButtonClicked={() => {
					this.props.history.push({pathname: '/'});
					this.props.onCancelClientDetailCounter()
				}}
				deleteButtonClicked={this.props.onDeleteClientDetailCounter}
			/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		clientDetail: state.sectionSwitchReducer.clientDetail,
		clientDatabase: state.nameCardReducer.people
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCancelClientDetailCounter: () => dispatch(actions.cancelClientDetail()),
		onDeleteClientDetailCounter: (client) => dispatch(actions.deleteClientDetail(client))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailDisplay);
