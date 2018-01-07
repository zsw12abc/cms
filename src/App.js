import React, {Component} from 'react';
import './App.css'
import NameCardDisplay from "./containers/NameCardDisplay";
import NavigationBar from "./containers/Navigation";
import Drawer from "./containers/Drawer";

class App extends Component {
	render() {
		return (
			<div>
				<NavigationBar/>
				<div className={'row App'}>
					<Drawer/>
					<NameCardDisplay/>
				</div>
			</div>
		);
	}
}

export default App;
