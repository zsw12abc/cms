import React, {Component} from 'react';
import './SideDrawer.css';

class SideDrawer extends Component {
	render() {
		return (
			<div className={"bmd-layout-drawer bg-faded"}>
				<header>
					<a className={"navbar-brand"}>Clients List</a>
				</header>
				<ul className={"list-group"}>
					<a className={"list-group-item"}>Detail</a>
					<a className={"list-group-item"}>Delete</a>
				</ul>
			</div>
		);
	}
}


export default SideDrawer;
