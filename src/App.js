import React, {Component} from 'react';
import classes from './App.css';

class App extends Component {
	state = {
		people: [
			{name: 'Shaowei', age: 25},
			{name: 'Kira', age: 22},
			{name: 'ZSW', age: 18},
		]

	};


	render() {
		const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
		return (
			<div className={'App'}>
				{this.state.people.map(person => {
					return (
						<div className={'well'} style={wellStyles} key={person.name}>
							<h2>{person.name}</h2>
							<p>{person.age}</p>
						</div>
					)
				})}
			</div>
		);
	}
}

export default App;
