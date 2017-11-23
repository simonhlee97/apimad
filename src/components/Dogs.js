import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// guide: https://youtu.be/jZDc-o7Mkdc. He uses SuperAgent instead of Fetch
// setState() will force Component to re-render and run render() method

class Moviedb extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		fetch('https://dog.ceo/api/breeds/image/random')
		.then((Response) => Response.json())
		.then((data) => {
			console.log(data.message)
		})
	}
	render() {
	    return (
	    <div>
	        <h1>Open Movies DB API</h1>
	        <h4>brief summary of this page</h4>
	        <Link to="/">Back</Link>
	    </div>
	    )
	}
}

export default Moviedb;