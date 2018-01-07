import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './NavigationBar.css'

class NavigationBar extends Component {
	render() {
		let searchName = null;
		return (
			<nav className={'navbar navbar-light bg-light fixed-top NavigationBar'}>
				<button className={"navbar-toggler"} onClick={this.props.menuButtonClicked}>
					<FontAwesome name={'bars'}/>
				</button>
				<a className={'navbar-brand mb-0 h1 NavigationBand'}>Client Manager System</a>
				<div className={'form-inline my-2 my-lg-0 SearchBox'}>
					<input className={"form-control mr-sm-2"}
					       type="search"
					       placeholder={"Search"}
					       onChange={(event) => {
						       searchName = event.target.value;
						       this.props.searchButtonClicked(searchName);
					       }}
					       aria-label="Search"
					/>
					<button className={"btn btn-outline-primary my-2 my-sm-0"}
					        onClick={() => this.props.searchButtonClicked(searchName)}
					        type="submit">Search
					</button>
				</div>
			</nav>
		);
	}
}


export default NavigationBar;
