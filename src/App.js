import React, {Component} from 'react';
import './App.css'
import MainContent from './containers/MainContent'
import NavigationBar from "./containers/Navigation";
import Drawer from "./containers/Drawer/Drawer";

class App extends Component {
	render() {
		return (
			<div className={'row'}>
				<Drawer/>
				<div className={'col App'}>
					<NavigationBar/>
					<MainContent/>
				</div>
			</div>
		);
	}
}

export default App;
