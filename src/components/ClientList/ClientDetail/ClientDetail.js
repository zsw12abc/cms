import React, {Component} from 'react';

import './ClientDetail.css'

class ClientDetail extends Component {
	render() {
		const clientDetail = this.props.clientDetail;
		const client = clientDetail.client;
		return (
			<div className={'Card'}>
				<h1>{client.name}</h1>
				<h2>{client.age}</h2>
				<h3>{client.id}</h3>
				<button onClick={this.props.cancelButtonClicked}>Cancel</button>
			</div>
		);
	}
}


export default ClientDetail;
