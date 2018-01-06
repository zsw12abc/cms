import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';

class NavigationBar extends Component {
	render() {
		let searchName = null;
		return (
			<nav className={'navbar navbar-light bg-light justify-content-between'}>
				<a className={'navbar-brand mb-0 h1'}>Client Manager System</a>
				<form className={'form-inline my-2 my-lg-0'}>
					<input className={"form-control mr-sm-2"}
					       type="search"
					       placeholder={"Search"}
					       onChange={(event) => {
						       searchName = event.target.value;
						       this.props.onFilterNameCardCounter(searchName);
					       }}
					       aria-label="Search"
					/>
					<button className={"btn btn-outline-primary my-2 my-sm-0"}
					        onClick={this.props.onSearchNameCardCounter(searchName)}
					        type="submit">Search
					</button>
				</form>
			</nav>
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
		onFilterNameCardCounter: (name) => dispatch(actions.filterNameCard(name)),
		onSearchNameCardCounter: (name) => dispatch(actions.searchNameCard(name))
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
