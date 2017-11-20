import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return(
    	<div>
    		<h1>Simon-React-App</h1>
    		
	    	<div class="mdl-grid">

	    		<div class="mdl-cell mdl-cell--4-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Github API project</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    A small app that uses Github's API and returns a JSON file with a Github user's information.
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

				  <div class="mdl-cell mdl-cell--4-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand" id="trivia">
					    <h2 class="mdl-card__title-text">Open Trivia DB</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    Challenge your knowledge and see if you can answer these trivia questions, pulled from opentdb.com's API.
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

				  <div class="mdl-cell mdl-cell--4-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Google Maps API</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    Challenge your knowledge and see if you can answer these trivia questions, pulled from opentdb.com's API.
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
					    <Link to="/Google">
						    <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						      see project
						    </button>
					    </Link>
					  </div>
					</div>
				  </div>

				  <div class="mdl-cell mdl-cell--4-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Star Wars API</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    some text
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
					    <Link to="/Starwars">
						    <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						      see project
						    </button>
					    </Link>
					  </div>
					</div>
				  </div>

				  <div class="mdl-cell mdl-cell--4-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Outer Space API</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
						some loremipsum
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
					    <Link to="/Space">
						    <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						      see project
						    </button>
					    </Link>
					  </div>
					</div>
				  </div>

				  <div class="mdl-cell mdl-cell--4-col">
				  	<div class="demo-card-square mdl-card mdl-shadow--2dp">
					  <div class="mdl-card__title mdl-card--expand">
					    <h2 class="mdl-card__title-text">Pokémon API</h2>
					  </div>
					  <div class="mdl-card__supporting-text">
					    some loremipsum
					  </div>
					  <div class="mdl-card__actions mdl-card--border">
					    <Link to="/Pokemon">
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
