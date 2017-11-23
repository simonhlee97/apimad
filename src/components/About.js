import React from 'react';
import {Link} from 'react-router-dom';


const About = () => (
	<div>
		<h5>Nov. 19, 2017</h5>
		<p>
			I'm Simon. I have been studying web development since October 2016. I recently graduated from <a href="https://ElevenFifty.org">Eleven Fifty Academy's</a> Accelerated Learning program, where I learned how to build full-stack applications. I created this little project to practice and better understand ReactJS, REST APIs, HTTP, axios, the Fetch API, and Material Design Lite. If you have any comments or questions, please visit my <a href="https://simonhlee97.github.io/">Github portfolio</a> and fill out the contact form.
		</p>
		<Link to="/">Back to Main Page</Link>
		<h6>Links to the tools and libraries used to create this project:</h6>
		<ul id="tools">
			<li><a href="https://reactjs.org">React</a></li>
			<li><a href="">Fetch API</a></li>
			<li><a href="https://www.npmjs.com/package/axios">axios</a></li>
			<li><a href="">Material Design Lite</a></li>
		</ul>
	</div>
);

export default About;