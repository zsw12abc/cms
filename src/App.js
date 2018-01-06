import React, {Component} from 'react';
import {Button, Well} from 'react-bootstrap';
import './App.css'
import reactImg from './img/react.png';
import pikaImg from './img/pikachu.jpg';

class App extends Component {
	state = {
		people: [
			{id: 1, name: 'Shaowei', age: 25, imageUrl: reactImg, editMode: false},
			{id: 2, name: 'Kira', age: 22, imageUrl: pikaImg, editMode: false},
			{id: 3, name: 'ZSW', age: 18, imageUrl: pikaImg, editMode: false},
		]

	};

	switchEditModeHandler = (p) => {
		let peopleList = [...this.state.people];
		let selectedPerson = peopleList.filter(person => {
			return (person.id === p.id)
		})[0];
		selectedPerson.editMode = true;
		this.setState({
			...this.state,
			people: peopleList
		});
		console.log(this.state);
	};


	render() {
		let displayMode = null;
		if (this.state.editMode) {

		} else {
			displayMode = (
				<div>
					{this.state.people.map(person => {
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
										        onClick={() => this.switchEditModeHandler(person)}>Edit</Button>
									</div>
								</div>
							</Well>
						)
					})
					}
				</div>
			);
		}


		return (
			<div className={'App'}>
				{displayMode}
			</div>
		);
	}
}

export default App;
