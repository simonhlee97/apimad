import React from 'react';
import {Link} from 'react-router-dom';


const About = () => (
	<div>
		<h5>Nov. 19, 2017</h5>
		<p>
			Hi, I'm Simon. I have been studying web development since October 2016. I recently graduated from <a href="https://ElevenFifty.org">Eleven Fifty Academy's</a> Accelerated Learning program, where I learned how to build full-stack applications. I created this little project to gain a better understanding of React, Material Design Lite, and REST APIs. If you have any comments or questions, please visit my <a href="https://simonhlee97.github.io/">Github portfolio</a> and fill out the contact form.
		</p>
		<Link to="/">Back to Main Page</Link>
	</div>
);

export default About;