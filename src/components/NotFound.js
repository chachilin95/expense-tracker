import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                404 - <Link to='/'>Go Home</Link>
            </div>
        );
    }
}