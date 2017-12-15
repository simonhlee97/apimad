import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Instagram from './Instagram';
import Spotify from './Spotify';


class Dash extends React.Component {
  render() {
    return(
    	<div>
    		<h1>MyWorld</h1>
        <Twitter />
        <Facebook />
        <Instagram />
			</div>
    )
  };
}

export default Dash;
