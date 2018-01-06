import React, {Component} from 'react';
import {Button, Well} from 'react-bootstrap';

import './PeopleInfo.css';

class PeopleInfo extends Component {

	render() {
		const person = this.props.person;
		let personName = person.name;
		let personAge = person.age;
		let personInfo = null;
		if (person.editMode) {
			personInfo = (
				<div className={'row'}>
					<div className={'Photo col-sm-4'}>
						<img className={'Avatar'} src={person.imageUrl} alt={'Avatar'}/>
					</div>
					<div className={'col-sm-8'}>
						<div className={'NameContent'}>
							<p>Name: <input
								placeholder={person.name}
								type={'text'}
								onChange={(event) => (
									personName = event.target.value
								)}/>
							</p>
							<p>Age: <input
								placeholder={person.age}
								type={'text'}
								onChange={(event) => (
									personAge = parseInt(event.target.value, 10)
								)}/>
							</p>
							<p>ID: <span>{person.id}</span></p>
						</div>
						<Button
							className={"SaveButton btn btn-danger "}
							onClick={() => this.props.cancelButtonClicked(person)}>Cancel</Button>
						<Button
							className={"SaveButton btn btn-success"}
							onClick={() => this.props.saveButtonClicked(person, personName, personAge)}>Save</Button>
					</div>
				</div>
			)

		} else {
			personInfo = (
				<div className={'row'}>
					<div className={'Photo col-sm-4'}>
						<img className={'Avatar'} src={person.imageUrl} alt={'Avatar'}/>
					</div>
					<div className={'col-sm-8'}>
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
			<Well className={'col-sm'}>
				{personInfo}
			</Well>
		);
	}
}


export default PeopleInfo;
