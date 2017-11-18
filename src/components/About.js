import React from 'react';
import {Link} from 'react-router-dom';


const About = () => (
	<div>
		<h5>Nov. 18, 2017</h5>
		<p>
			My name is Simon. I have been studying web development since October 2016. I recently graduated from Eleven Fifty Academy's JavaScript program, where I learned front-end frameworks like Angular and React. I built this project to gain a better understanding of React, as well as play with Material Design. If you have any comments or questions, please visit my portfolio.
		</p>
		<Link to="/">Back to Main Page</Link>
	</div>
);

export default About;