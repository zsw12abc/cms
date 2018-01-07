import React, {Component} from 'react';
import {connect} from 'react-redux';
import PeopleList from '../../components/ClientList/ClientList';
import * as actions from '../../store/actions/index';

class NameCardDisplay extends Component {
	render() {
		let peopleList = null;

		if (this.props.clientList) {
			peopleList = (
				<PeopleList
					list={this.props.people}
					editButtonClicked={this.props.onEditNameCardCounter}
					cancelButtonClicked={this.props.onCancelNameCardCounter}
					saveButtonClicked={this.props.onSaveNameCardCounter}
					detailButtonClicked={this.props.onDetailNameCardCounter}
				/>
			)
		} else {
			peopleList = null;
		}
		return (
			<div>
				{peopleList}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		people: state.nameCardReducer.people,
		drawer: state.sectionSwitchReducer.drawer,
		clientList: state.sectionSwitchReducer.clientList
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onEditNameCardCounter: (person) => dispatch(actions.editNameCard(person)),
		onSaveNameCardCounter: (person, pName, pAge) => dispatch(actions.saveNameCard(person, pName, pAge)),
		onCancelNameCardCounter: (person) => dispatch(actions.cancelNameCard(person)),
		onDetailNameCardCounter: (person) => dispatch(actions.showClientDetail(person))
	}

};


export default connect(mapStateToProps, mapDispatchToProps)(NameCardDisplay);
