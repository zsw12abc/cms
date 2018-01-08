import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Drawer.css'
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Drawer extends Component {
	render() {
		let sideDrawerSection = null;
		let sideClassName = this.props.drawer ? 'col-12 col-md-3 col-xl-2 bd-sidebar Drawer' : '';
		if (this.props.drawer) {
			sideDrawerSection = (
				<SideDrawer/>
			)
		} else {
			sideDrawerSection = null;
		}
		return (
			<div className={sideClassName}>
				{sideDrawerSection}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		drawer: state.sectionSwitchReducer.drawer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
