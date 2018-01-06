import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

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
						<p>ID: <span>{person.id}</span></p>
					</div>
					<div className={'col-sm-8'}>
						<div className={'NameContent-Edit'}>
							<p>Name: <input className={'Input'}
							                placeholder={person.name}
							                type={'text'}
							                onChange={(event) => (
								                personName = event.target.value
							                )}/>
							</p>
							<p>Age: <input className={'Input'}
							               placeholder={person.age}
							               type={'text'}
							               onChange={(event) => (
								               personAge = parseInt(event.target.value, 10)
							               )}/>
							</p>
						</div>
						<div className={'row justify-content-center'}>
							<button
								className={"col-sm btn btn-outline-danger "}
								onClick={() => this.props.cancelButtonClicked(person)}>
								<FontAwesome name={'undo'}/>
							</button>
							<button
								className={"col-sm btn btn-outline-success"}
								onClick={() => this.props.saveButtonClicked(person, personName, personAge)}>
								<FontAwesome name={'check'}/>
							</button>
						</div>
					</div>
				</div>
			)
		} else {
			personInfo = (
				<div className={'row'}>
					<div className={'col-sm-4'}>
						<img className={'Avatar'} src={person.imageUrl} alt={'Avatar'}/>
						<p>ID: <span>{person.id}</span></p>
					</div>
					<div className={'col-sm-8'}>
						<div className={'row justify-content-end'}>
							<button
								className={"EditButton"}
								onClick={() => this.props.editButtonClicked(person)}>
								<FontAwesome name={'pencil-square-o'}/>
							</button>
						</div>
						<div className={'NameContent'}>
							<p>Name: <span className={'NameSpan'}>{person.name}</span></p>
							<p>Age: <span className={'AgeSpan'}>{person.age}</span></p>
						</div>
					</div>
				</div>
			)
		}
		return (
			<div className={'col-sm-4 Card'}>
				{personInfo}
			</div>
		);
	}
}


export default PeopleInfo;
