// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

// // guide: https://youtu.be/jZDc-o7Mkdc. He uses SuperAgent instead of Fetch
// // setState() will force Component to re-render and run render() method

// class Swanson extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			data: []
// 		}
// 	}
// 	componentDidMount() {
// 		fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
// 		.then((res) => res.json())
// 		.then((jsondata) => {
// 			this.setState({data: jsondata})
// 			console.log(jsondata)
// 		})
// 	}

// 	buttonClicked() {
//         // console.log('Button was clicked!')
//         fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
// 		.then((res) => res.json())
// 		.then((jsondata) => {
// 			this.setState({data: jsondata})
// 			console.log(jsondata)
// 		})

//     }

// 	render() {
// 		// console.log(this.state.data)
// 	    return (
// 	    <div>
// 	        <h1>Random Ron Swanson Quotes</h1>
// 	        <h4>from <a href="https://github.com/jamesseanwright/ron-swanson-quotes">ron-swanson-quotes</a> API</h4>
// 	        <Link to="/">Back</Link>
// 	        <br />
// 	        <img id="ron" src="http://i0.kym-cdn.com/entries/icons/original/000/023/463/6360103332924270401274957217_Ron.jpg" alt="" />
// 	        <div>

// 	        	<h4>{this.state.data}</h4><br />
// 	        	<button onClick={this.buttonClicked.bind(this)} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" value="Another Quote">Another Quote</button>
// 	        	<p class="space" />
// 	        </div>
// 	    </div>
// 	    )
// 	}
// }

// export default Swanson;