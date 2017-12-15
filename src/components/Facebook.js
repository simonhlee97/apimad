import React from 'react';
import { Link } from 'react-router-dom';


class Facebook extends React.Component {
    render() {
        return (
            <div>
                <h2>My Facebook</h2>
                <Link to="/">Back</Link>

            </div>
        );
    }
}

export default Facebook;