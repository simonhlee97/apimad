import React from 'react';
import {Link} from 'react-router-dom';


class Trivia extends React.Component {
  render() {
    return (
		  <div id="trivia">
		    <h2>Welcome to Trivia</h2>
        <h4>This app uses opentdb.com's API to generate random trivia questions.</h4>
        <Link to="/">Back</Link>
		  </div>
    );
  }
}

export default Trivia;