import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

import './ClientInfo.css';

class ClientInfo extends Component {

	render() {
		const person = this.props.person;
		let personName = person.name;
		let personAge = person.age;
		let personNum = person.mobile;
		let personInfo = null;
		if (person.editMode) {
			personInfo = (
				<div className={'row'}>
					<div className={'Photo col-sm-4'}>
						<img className={'Avatar'} src={person.imageUrl} alt={'Avatar'}/>
						<p>ID: <span>{person.id}</span></p>
					</div>
					<div className={'col-sm-8'}>
						<div className={'NameContent-Edit container-fluid'}>
							<div className={'Info'}>
								<span>Name:</span>
								<input className={'Input'}
								       placeholder={person.name}
								       type={'text'}
								       onChange={(event) => (
									       personName = event.target.value
								       )}/>
							</div>
							<div className={'Info'}>
								<span>Age:</span>
								<input className={'Input'}
								       placeholder={person.age}
								       type={'text'}
								       onChange={(event) => (
									       personAge = parseInt(event.target.value, 10)
								       )}/>
							</div>
							<div className={'Info'}>
								<span>Mobile:</span>
								<input className={'Input'}
								       placeholder={person.mobile}
								       type={'text'}
								       onChange={(event) => (
									       personNum = event.target.value
								       )}/>
							</div>
						</div>
						<div className={'row ButtonGroup'}>
							<button
								className={"col-sm-4 btn btn-outline-info "}
								onClick={() => this.props.cancelButtonClicked(person)}>
								<FontAwesome name={'undo'}/>
							</button>
							<button
								className={"col-sm-4 btn btn-outline-success"}
								onClick={() => this.props.saveButtonClicked(person, personName, personAge, personNum)}>
								<FontAwesome name={'check'}/>
							</button>
						</div>
					</div>
				</div>
			)
		} else {
			personInfo = (
				<div>
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
								<p>Mobile: <span className={'AgeSpan'}>{person.mobile}</span></p>
							</div>
						</div>
					</div>
					<div className={'row justify-content-end'}>
						<Link to={'/Client/' + person.id}>
							<button className={'Detail'} onClick={() => this.props.detailButtonClicked(person)}>
								<FontAwesome name={'address-book'}/>
								<span className={'More'}>more</span>
							</button>
						</Link>
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


export default ClientInfo;
