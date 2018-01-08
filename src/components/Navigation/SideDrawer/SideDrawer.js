import React, {Component} from 'react';
import './SideDrawer.css';

class SideDrawer extends Component {
	render() {
		return (
			<div className={"bmd-layout-drawer bg-faded SideDrawer"}>
				<header>
					<a className="navbar-brand">Clients</a>
				</header>
				<ul className="list-group">
					<a className="list-group-item">Link 1</a>
					<a className="list-group-item">Link 2</a>
					<a className="list-group-item">Link 3</a>
				</ul>
			</div>
		);
	}
}


export default SideDrawer;
