import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Starwars extends Component {
  render() {
    return (
    <div>
        <h1>this is the Star Wars API</h1>
        <h4>brief summary of this page</h4>
        <Link to="/">Back</Link>
    </div>
    );
  }
}

export default Starwars;