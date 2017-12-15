import React from 'react';
import { Link } from 'react-router-dom';


class Instagram extends React.Component {
    render() {
        return (
            <div>
                <h2>My Instagram</h2>
                <Link to="/">Back</Link>

            </div>
        );
    }
}

export default Instagram;