import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

import './ClientDetail.css'

class ClientDetail extends Component {
	render() {
		console.log(this.props);
		const clientDetail = this.props.clientDetail;
		const client = clientDetail.client;
		return (
			<div className={'ClientDetail container-fluid'}>
				<div className={'row'}>
					<div className={'col-sm-4'}>
						<img className={'Image'} src={client.imageUrl} alt={'Avatar'}/>
					</div>
					<div className={'Detail col-sm-4'}>
						<div className={'Info'}>
							<p className={'Tag'}>ID:</p>
							<p className={'TagContent'}>{client.id}</p>
						</div>
						<div className={'Info'}>
							<p className={'Tag'}>Name:</p>
							<p className={'TagContent'}>{client.name}</p>
						</div>
						<div className={'Info'}>
							<p className={'Tag'}>Age:</p>
							<p className={'TagContent'}>{client.age}</p>
						</div>
						<div className={'Info'}>
							<p className={'Tag'}>Telephone:</p>
							<p className={'TagContent'}>{client.phone}</p>
						</div>
						<div className={'Info'}>
							<p className={'Tag'}>Mobile:</p>
							<p className={'TagContent'}>{client.mobile}</p>
						</div>
						<div className={'Info'}>
							<p className={'Tag'}>Address:</p>
							<p className={'TagContent'}>{client.address}</p>
						</div>
						<div className={'Info'}>
							<p className={'Tag'}>Company:</p>
							<p className={'TagContent'}>{client.company}</p>
						</div>
						<Link to={'/'}>
							<button
								className={"col-sm-4 btn btn-outline-danger "}
								onClick={() => {
									this.props.deleteButtonClicked(client);
									this.props.cancelButtonClicked()
								}}>
								<FontAwesome name={'trash'}/>
							</button>
						</Link>
						<Link to={'/'}>
							<button
								className={"col-sm-4 btn btn-outline-info "}
								onClick={this.props.cancelButtonClicked}>
								<FontAwesome name={'undo'}/>
							</button>
						</Link>
						<Link to={'/'}>
							<button
								className={"col-sm-4 btn btn-outline-success"}
								onClick={() => this.props.cancelButtonClicked()}>
								<FontAwesome name={'check'}/>
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}


export default ClientDetail;
