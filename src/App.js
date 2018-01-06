import React, {Component} from 'react';
import './App.css'
import reactImg from './img/react.png';
import pikaImg from './img/pikachu.jpg';
import PeopleList from "./Components/PeopleList/PeopleList";

class App extends Component {
	state = {
		people: [
			{id: 1, name: 'Shaowei', age: 25, imageUrl: reactImg, editMode: false},
			{id: 2, name: 'Kira', age: 22, imageUrl: pikaImg, editMode: false},
			{id: 3, name: 'ZSW', age: 18, imageUrl: pikaImg, editMode: false},
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
		let displayMode = null;
		if (this.state.editMode) {

		} else {
			displayMode = <PeopleList
				list={this.state.people}
				editButtonClicked={this.editButtonHandler}
				cancelButtonClicked={this.cancelButtonHandler}
				saveButtonClicked={this.saveButtonHandler}
			/>
		}


		return (
			<div className={'App'}>
				{displayMode}
			</div>
		);
	}
}

export default App;
