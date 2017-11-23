import React, {Component} from 'react';

class Triviajson extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount(){
		fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean')
		.then((response) => response.json())
		.then((findresponse) => {
			console.log(findresponse.results)
			this.setState({
				data: findresponse.results
			})
	 	})
	}
	
	render() {
		return(
			<div>
				{
					this.state.data.map((dynamicData, key) =>
						<div>
						<form>
						{dynamicData.question}<br />
						<button>{dynamicData.correct_answer}</button><br />
						<button>{dynamicData.incorrect_answers}</button>
						</form>
						<hr />
						</div>
					)
				}
			</div>
		)
	}
}

export default Triviajson;
