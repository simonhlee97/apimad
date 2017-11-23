import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Form from './Form';

class Github extends Component {
	state={
		cards: []
	}
	addNewCard = (cardInfo) => {
		this.setState(prevState => ({
			cards: prevState.cards.concat(cardInfo)
		}));
	};
	render() {
		return(
			<div>
				<h1>Github API Project</h1>
				<h4>Type anyone's Github username, then click on the button. It will pull data from Github's API and create a card with that person's profile pic.</h4>
        		<Link to="/">Back</Link>
				<Form onSubmit={this.addNewCard}/>
				<CardList cards={this.state.cards} />
			</div>
		);
	}
}

const Card = (props) => {
  return(
      <div style={{margin: '1em'}}>
        <img width="85" src={props.avatar_url} alt="github" />
        <div style={{display: 'inline-block', marginLeft: 20}}>
          <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
          <div>{props.company}</div>
        </div>
      </div>
    )
}

const CardList = (props) => {
	return(
		<div>
   		{props.cards.map(card => <Card key={card.id} {...card} />)}
    	</div>
	);
}

export default Github;