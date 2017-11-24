import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// guide: https://youtu.be/jZDc-o7Mkdc. He uses SuperAgent instead of Fetch
// setState() will force Component to re-render and run render() method

class Dogs extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		fetch('https://dog.ceo/api/breeds/image/random')
		.then((Response) => Response.json())
		.then((jsondata) => {
			this.setState({data: jsondata.message})
			console.log(jsondata)
		})
	}

	buttonClicked() {
        // console.log('Button was clicked!')
        fetch('https://dog.ceo/api/breeds/image/random')
		.then((Response) => Response.json())
		.then((jsondata) => {
			this.setState({data: jsondata.message})
		})

    }

	render() {
		// console.log(this.state.data)
	    return (
	    <div>
	        <h1>Photos of Dogs!</h1>
	        <h4>I'm fetching a random photo from the <a href="https://dog.ceo">dog.ceo</a> API</h4>
	        <Link to="/">Back</Link>
	        <div>
	        	<img src={this.state.data} alt="" /><br /><br />
	        	<button onClick={this.buttonClicked.bind(this)} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" value="Show another dog">see another dog</button>
	        </div>
	    </div>
	    )
	}
}

export default Dogs;