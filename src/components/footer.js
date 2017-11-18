import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
    	<footer class="footer mdl-mini-footer">
		  <div class="mdl-mini-footer">
		    <div class="mdl-logo">
			    <Link to="/About">About Simon-React-App
			    </Link>
		    </div>
		  </div>
		</footer>
      /*<div>
    	Simon is a web developer and recent graduate of Eleven Fifty Academy. He is addicted to learning and coding, and might be addicted to coffee as well. He watches Silicon Valley, and still watches The Office. He enjoys tennis, basketball, and reading.
      </div> */
    );
  }
}

export default Footer;