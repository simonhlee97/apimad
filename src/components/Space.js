import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Space extends Component {
  render() {
    return (
    	<div>
        <h1>this is the Space API</h1>
        <h4>brief summary of this page</h4>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Space;