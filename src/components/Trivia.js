import React from 'react';
import {Link} from 'react-router-dom';


class Trivia extends React.Component {
  render() {
    return (
    	
		  <div>
		    <h2>Welcome to Trivia</h2>
        <h4>brief summary of this page</h4>
        <Link to="/">Back</Link>
		  </div>
		
      /*<div>
    	Simon is a web developer and recent graduate of Eleven Fifty Academy. He is addicted to learning and coding, and might be addicted to coffee as well. He watches Silicon Valley, and still watches The Office. He enjoys tennis, basketball, and reading.
      </div> */
    );
  }
}

export default Trivia;