import React, {Component} from 'react';
import {Button, Well} from 'react-bootstrap';

import './PeopleInfo.css';

class PeopleInfo extends Component {
	render() {
		const person = this.props.person;
		let personInfo = null;
		if (person.editMode) {
			personInfo = (
				<div className={'row'}>
					<div className={'Photo col-sm'}>
						<img className={'Avatar'} src={person.imageUrl} alt={'Avatar'}/>
					</div>
					<div className={'col-sm'}>
						<div className={'NameContent'}>
							<p>Name: <input value={person.name} type={'text'}/></p>
							<p>Age: <input value={person.age} type={'text'}/></p>
							<p>ID: <span>{person.id}</span></p>
						</div>
						<Button
							className={"btn btn-danger"}
							onClick={() => this.props.cancelButtonClicked(person)}>Cancel</Button>
						<Button
							className={"btn btn-success"}
							onClick={() => this.props.saveButtonClicked(person)}>Save</Button>
					</div>
				</div>
			)

		} else {
			personInfo = (
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
						<Button
							className={"btn btn-primary"}
							onClick={() => this.props.editButtonClicked(person)}>Edit</Button>
					</div>
				</div>)
		}
		return (
			<Well className={'WellStyles'}>
				{personInfo}
			</Well>
		);
	}
}


export default PeopleInfo;
