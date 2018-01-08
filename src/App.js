import React, {Component} from 'react';
import './App.css'
import MainContent from './containers/MainContent'
import NavigationBar from "./containers/Navigation";
import Drawer from "./containers/Drawer/Drawer";

class App extends Component {
	render() {
		return (
			<div>
				<header><NavigationBar/></header>
				<div className={'container-fluid'}>
					<div className={'row flex-xl-nowrap'}>
						<Drawer/>
						<MainContent/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
