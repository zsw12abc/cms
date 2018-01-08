import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

import './ClientDetail.css'

class ClientDetail extends Component {
	render() {
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
						<button
							className={"col-sm-4 btn btn-outline-danger "}
							onClick={this.props.cancelButtonClicked}>
							<FontAwesome name={'trash'}/>
						</button>
						<button
							className={"col-sm-4 btn btn-outline-info "}
							onClick={this.props.cancelButtonClicked}>
							<FontAwesome name={'undo'}/>
						</button>
						<button
							className={"col-sm-4 btn btn-outline-success"}
							onClick={() => this.props.cancelButtonClicked()}>
							<FontAwesome name={'check'}/>
						</button>
					</div>
				</div>
			</div>
		);
	}
}


export default ClientDetail;
