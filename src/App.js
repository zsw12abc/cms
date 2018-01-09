import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css'
import MainContent from './containers/MainContent'
import NavigationBar from "./containers/Navigation";
import Drawer from "./containers/Drawer/Drawer";

class App extends Component {
	render() {
		return (
			<BrowserRouter basename={'/'}>
				<div>
					<header><NavigationBar/></header>
					<div className={'container-fluid'}>
						<div className={'row flex-xl-nowrap'}>
							<Drawer/>
							<MainContent/>
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
