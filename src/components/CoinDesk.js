import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// guide: https://youtu.be/jZDc-o7Mkdc. He uses SuperAgent instead of Fetch
// setState() will force Component to re-render and run render() method

class CoinDesk extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((res) => res.json())
		.then((jsondata) => {
			this.setState({data: jsondata})
			console.log(jsondata)
		})
	}

	buttonClicked() {
        // console.log('Button was clicked!')
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((res) => res.json())
		.then((jsondata) => {
			this.setState({data: jsondata})
			console.log(this.state.data)
		})

    }

	render() {
		// console.log(this.state.data)
	    return (
	    <div>
	        <h1>CoinDesk API: BitCoin Price Index</h1>
	        <h4>from <a href="https://api.coindesk.com/v1/bpi/currentprice.json">CoinDesk</a> API</h4>
	        <Link to="/">Back</Link>
	        <div>
	        	<span>{this.state.data}</span><br />
	        	<button onClick={this.buttonClicked.bind(this)} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" value="Another Quote">Another Quote</button>
	        </div>
	    </div>
	    )
	}
}

export default CoinDesk;