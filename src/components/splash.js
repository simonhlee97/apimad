import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return(
    	<div>
    		<h1>Simon-React-App</h1>
    		
	    	<div class="mdl-grid">

	    		<div class="mdl-cell mdl-cell--3-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Github Cards</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    Using Github's API to create user cards.
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
					  	<Link to="/Github">
					    <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
					      See Project
					    </button>
					    </Link>
					  </div>
					</div>
				</div>

				<div class="mdl-cell mdl-cell--3-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Open Trivia DB</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    See if you can answer these trivia questions.
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
					  	<Link to="/Trivia">
					    <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
					      see project
					    </button>
					    </Link>
					    
					  </div>
					</div>
				</div>

				  <div class="mdl-cell mdl-cell--3-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Dogs</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    Who let the dogs out!
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
					    <Link to="/Dogs">
						    <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						      see project
						    </button>
					    </Link>
					  </div>
					</div>
				  </div>

				  <div class="mdl-cell mdl-cell--3-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Ron Swanson Quotes</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    Random Ron Swanson Quotes
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
					    <Link to="/Swanson">
						    <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						      see project
						    </button>
					    </Link>
					  </div>
					</div>
				  </div>

				  
				</div>
		</div>
    )
  };
}

export default Splash;
