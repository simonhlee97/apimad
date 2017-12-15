import React from 'react';
import { Link } from 'react-router-dom';


class Twitter extends React.Component {
    render() {
        return (
            <div id="trivia">
                <h2>My Twitter</h2>
                <Link to="/">Back</Link>
                
            </div>
        );
    }
}

export default Twitter;