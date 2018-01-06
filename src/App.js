import React, {Component} from 'react';
import './App.css'

import PeopleList from "./Components/PeopleList/PeopleList";
import reactImg from './img/react.png';
import pikaImg from './img/pikachu.jpg';

class App extends Component {
	state = {
		people: [
			{id: 1, name: 'Shaowei', age: 25, imageUrl: pikaImg, editMode: false},
			{id: 2, name: 'Kira', age: 22, imageUrl: pikaImg, editMode: false},
			{id: 3, name: 'ZSW', age: 18, imageUrl: pikaImg, editMode: false},
			{id: 4, name: 'Shaowei', age: 25, imageUrl: reactImg, editMode: false},
			{id: 5, name: 'Kira', age: 22, imageUrl: reactImg, editMode: false},
			{id: 6, name: 'ZSW', age: 18, imageUrl: reactImg, editMode: false},
			{id: 7, name: 'Shaowei', age: 25, imageUrl: pikaImg, editMode: false},
			{id: 8, name: 'Kira', age: 22, imageUrl: pikaImg, editMode: false},
			{id: 9, name: 'ZSW', age: 18, imageUrl: pikaImg, editMode: false},
		]

	};

	editButtonHandler = (p) => {
		this.switchEditModeHandler(p, 'edit');
	};

	cancelButtonHandler = (p) => {
		this.switchEditModeHandler(p, 'cancel');
	};

	saveButtonHandler = (p, pName, pAge) => {
		this.switchEditModeHandler(p, 'save', pName, pAge);
	};

	switchEditModeHandler = (p, type, pName = null, pAge = null) => {
		let peopleList = [...this.state.people];
		let selectedPerson = peopleList.filter(person => {
			return (person.id === p.id)
		})[0];
		switch (type) {
			case 'edit':
				selectedPerson.editMode = true;
				break;
			case 'save':
				selectedPerson.editMode = false;
				selectedPerson.name = pName;
				selectedPerson.age = pAge;
				break;
			case 'cancel':
				selectedPerson.editMode = false;
				break;
			default:
				break;
		}
		this.setState({
			...this.state,
			people: peopleList
		});
	};

	render() {
		return (
			<div className={'row App'}>
				<div className={'col-sm-2'}>
				</div>
				<div className={'col-sm-10 MainArea'}>
					<PeopleList
						list={this.state.people}
						editButtonClicked={this.editButtonHandler}
						cancelButtonClicked={this.cancelButtonHandler}
						saveButtonClicked={this.saveButtonHandler}
					/>
				</div>
			</div>
		);
	}
}

export default App;
