import React, {Component} from 'react';
import './ClientList.css';
import ClientInfo from "./ClientInfo/ClientInfo";

class PeopleList extends Component {
	render() {
		const peopleList = this.props.list;
		return (
			<div className={'row PeopleList'}>
				{
					peopleList.map(person => {
						let peopleCell = (
							<ClientInfo
								key={person.id}
								person={person}
								editButtonClicked={this.props.editButtonClicked}
								cancelButtonClicked={this.props.cancelButtonClicked}
								saveButtonClicked={this.props.saveButtonClicked}
								detailButtonClicked={this.props.detailButtonClicked}
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
