import React, {Component} from 'react';
import {Button, Well} from 'react-bootstrap';
import './PeopleList.css';

class PeopleList extends Component {
	render() {
		const peopleList = this.props.list;
		return (
			<div>
				{peopleList.map(person => {
					return (
						<Well className={'WellStyles'} key={person.id}>
							<div className={'row'}>
								<div className={'Photo col-sm'}>
									<img className={'Avatar'} src={person.imageUrl} alt={'Avatar'}/>
								</div>
								<div className={'col-sm'}>
									<div className={'NameContent'}>
										<p>Name: <span className={'NameSpan'}>{person.name}</span></p>
										<p>Age: <span className={'AgeSpan'}>{person.age}</span></p>
										<p>ID: <span>{person.id}</span></p>
									</div>
									<Button className={"btn btn-dark"}
									        onClick={() => this.props.clicked(person)}>Edit</Button>
								</div>
							</div>
						</Well>
					)
				})
				}
			</div>
		);
	}
}


export default PeopleList;
