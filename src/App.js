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
			displayMode = <PeopleList list={this.state.people} clicked={this.switchEditModeHandler}/>
		}


		return (
			<div className={'App'}>
				{displayMode}
			</div>
		);
	}
}

export default App;
