import React, {Component} from 'react';
import {connect} from 'react-redux';
import PeopleList from '../components/PeopleList/PeopleList';
import * as actions from '../store/actions/index';

class NameCardDisplay extends Component {
	render() {
		let peopleListClass = this.props.drawer ? 'col-sm-10' : 'col-sm-12';
		return (
			<div className={peopleListClass}>
				<PeopleList
					list={this.props.people}
					editButtonClicked={this.props.onEditNameCardCounter}
					cancelButtonClicked={this.props.onCancelNameCardCounter}
					saveButtonClicked={this.props.onSaveNameCardCounter}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		people: state.nameCardReducer.people,
		drawer: state.sectionSwitchReducer.drawer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onEditNameCardCounter: (person) => dispatch(actions.editNameCard(person)),
		onSaveNameCardCounter: (person, pName, pAge) => dispatch(actions.saveNameCard(person, pName, pAge)),
		onCancelNameCardCounter: (person) => dispatch(actions.cancelNameCard(person)),
	}

};


export default connect(mapStateToProps, mapDispatchToProps)(NameCardDisplay);
