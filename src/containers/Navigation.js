import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import NavigationBar from "../components/Navigation/NavigationBar/NavigationBar";

class Navigation extends Component {
	render() {
		return (
			<NavigationBar searchButtonClicked={this.props.onSearchNameCardCounter}/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		people: state.nameCardReducer.people
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchNameCardCounter: (name) => dispatch(actions.searchNameCard(name))
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
