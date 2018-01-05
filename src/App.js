import React, {Component} from 'react';
import {Button, Well} from 'react-bootstrap';
import './App.css'
import imageUrl from './img/react.png'

class App extends Component {
	state = {
		editMode: false,
		people: [
			{name: 'Shaowei', age: 25, imageUrl: './img/react.png'},
			{name: 'Kira', age: 22, imageUrl: './img/react.png'},
			{name: 'ZSW', age: 18, imageUrl: './img/react.png'},
		]

	};


	render() {
		return (
			<div className={'App'}>
				{this.state.people.map(person => {
					return (
						<Well className={'WellStyles'} key={person.name}>
							<div className={'row'}>
								<div className={'Photo col-sm'}>
									<image source={imageUrl}/>
									<p>Here is the image</p>
								</div>
								<div className={'col-sm'}>
									<div className={'NameContent'}>
										<p>Name: <span className={'NameSpan'}>{person.name}</span></p>
										<p>Age: <span className={'AgeSpan'}>{person.age}</span></p>
									</div>
									<Button className={"btn btn-dark"}>Press me</Button>
								</div>
							</div>

						</Well>
					)
				})}

			</div>
		);
	}
}

export default App;
