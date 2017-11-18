import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Splash from './Splash';
import Trivia from './Trivia';
import Github from './Github';
import About from './About';
import Pokemon from './Pokemon';
import Google from './Google';
import Space from './Space';
import Starwars from './Starwars';


const Main = () => (
	<main id="main">
		<Switch>
    		<Route exact path='/' component={Splash} />
    		<Route exact path='/Github' component={Github} />
    		<Route exact path='/Trivia' component={Trivia} />
    		<Route exact path='/About' component={About} />
    		<Route exact path='/Pokemon' component={Pokemon} />
    		<Route exact path='/Space' component={Space} />
    		<Route exact path='/Google' component={Google} />
            <Route exact path='/Starwars' component={Starwars} />
		</Switch>
	</main>
);

export default Main;
