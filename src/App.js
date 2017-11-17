import React, { Component } from 'react';
import Splash from './components/splash';
import Footer from './components/footer';
import Form from './components/form';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <Parent />
        <Footer />
      </div>
    );
  }
}
class Parent extends Component {
	state={
		cards: []
	};

	addNewCard = (cardInfo) => {
		this.setState(prevState => ({
			cards: prevState.cards.concat(cardInfo)
		}));
	};

	render() {
		return(
			<div>
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

// ES5 syntax
// const Button = function(props) {
//   return(
//     <button>Go</button>
//   );
// };

// ES6 syntax
// const Button = (props) => {
//   return(
//     <button>Go</button>
//   );
// };
export default App;
