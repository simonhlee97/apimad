import React from 'react';
import {Link} from 'react-router-dom';

import Triviajson from './Triviajson';

class Trivia extends React.Component {
  render() {
    return (
		<div id="trivia">
    		<h2>Welcome to Trivia</h2>
            <h4>This app uses opentdb.com's API to generate random trivia questions.</h4>
            <h5>Category: History. Level: Easy. Type: True/False</h5>
            
            <Link to="/">Back</Link>
            <hr />
            <Triviajson />
		</div>
    );
  }
}

export default Trivia;