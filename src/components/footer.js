import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
    	<footer class="mdl-mini-footer">
        <div class="mdl-mini-footer__left-section">
          <ul class="mdl-mini-footer__link-list">
            <li><Link to="/About">About Simon-React-App</Link></li>
            <li><a href="https://github.com/simonhlee97/apimad">Github Repo</a></li>
          </ul>
        </div>
        
      </footer>
    );
  }
}

export default Footer;

