import React, {Component} from 'react';
import './PeopleList.css';
import PeopleInfo from "./PeopleInfo/PeopleInfo";

class PeopleList extends Component {
	render() {
		const peopleList = this.props.list;
		return (
			<div className={'row'}>
				{
					peopleList.map(person => {
						let peopleCell = (
							<PeopleInfo
								key={person.id}
								person={person}
								editButtonClicked={this.props.editButtonClicked}
								cancelButtonClicked={this.props.cancelButtonClicked}
								saveButtonClicked={this.props.saveButtonClicked}
							/>
						);
						if (!person.display) {
							peopleCell = null;
						}
						return peopleCell
					})
				}
			</div>
		);
	}
}


export default PeopleList;
