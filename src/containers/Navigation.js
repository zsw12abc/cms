import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import NavigationBar from "../components/Navigation/NavigationBar/NavigationBar";

class Navigation extends Component {
	render() {
		return (
			<NavigationBar
				menuButtonClicked={this.props.onMenuButtonCounter}
				searchButtonClicked={this.props.onSearchNameCardCounter}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		// people: state.nameCardReducer.people,
		drawer: state.sectionSwitchReducer.drawer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchNameCardCounter: (name) => dispatch(actions.searchNameCard(name)),
		onMenuButtonCounter: () => dispatch(actions.drawerOpen()),
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
