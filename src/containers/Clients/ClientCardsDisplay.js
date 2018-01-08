import React, {Component} from 'react';
import {connect} from 'react-redux';
import PeopleList from '../../components/ClientList/ClientList';
import * as actions from '../../store/actions/index';

class NameCardDisplay extends Component {
	render() {
		return (
			<PeopleList
				list={this.props.people}
				editButtonClicked={this.props.onEditNameCardCounter}
				cancelButtonClicked={this.props.onCancelNameCardCounter}
				saveButtonClicked={this.props.onSaveNameCardCounter}
				detailButtonClicked={this.props.onDetailNameCardCounter}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		people: state.nameCardReducer.people,
		drawer: state.sectionSwitchReducer.drawer,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onEditNameCardCounter: (person) => dispatch(actions.editNameCard(person)),
		onSaveNameCardCounter: (person, pName, pAge, pMobile) => dispatch(actions.saveNameCard(person, pName, pAge, pMobile)),
		onCancelNameCardCounter: (person) => dispatch(actions.cancelNameCard(person)),
		onDetailNameCardCounter: (person) => dispatch(actions.showClientDetail(person))
	}

};


export default connect(mapStateToProps, mapDispatchToProps)(NameCardDisplay);
