import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class CoinDesk extends Component {
	constructor(){
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((Response) => Response.json())
		.then((findResponse) => {
			console.log(findResponse.bpi.USD.rate);
			console.log(findResponse.bpi.GBP.rate);
			console.log(findResponse.bpi.EUR.rate);
			this.setState({data: findResponse.bpi})
		})
	}

	render() {
		return(
			<div>
				<h1>CoinDesk API</h1>
				<Link to="/">Back</Link>
			</div>
			)
	}
}

export default CoinDesk;