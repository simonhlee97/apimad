import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Splash from './Splash';
import Trivia from './Trivia';
import Github from './Github';
import About from './About';
import CoinDesk from './CoinDesk';
import Dogs from './Dogs';
import Swanson from './Swanson';


const Main = () => (
	<main>
		<Switch>
    		<Route exact path='/' component={Splash} />
            <Route exact path='/Trivia' component={Trivia} />
    		<Route exact path='/Github' component={Github} />
    		<Route exact path='/About' component={About} />
    		<Route exact path='/CoinDesk' component={CoinDesk} />
            <Route exact path='/Dogs' component={Dogs} />
            <Route exact path='/Swanson' component={Swanson} />

		</Switch>
	</main>
);

export default Main;
