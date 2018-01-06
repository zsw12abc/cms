import React, {Component} from 'react';
import './App.css'
import NameCardDisplay from "./containers/NameCardDisplay";

class App extends Component {
	render() {
		return (
			<div className={'row App'}>
				<div className={'col-sm-2'}>
				</div>
				<div className={'col-sm-10 MainArea'}>
					<NameCardDisplay/>
				</div>
			</div>
		);
	}
}

export default App;
