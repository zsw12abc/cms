import React, {Component} from 'react';
import './App.css'
import NameCardDisplay from "./containers/NameCardDisplay";
import NavigationBar from "./containers/Navigation";

class App extends Component {
	render() {
		return (
			<div>
				<NavigationBar/>
				<div className={'row App'}>
					<div className={'col-sm-2'}>
					</div>
					<div className={'col-sm-10 MainArea'}>
						<NameCardDisplay/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
