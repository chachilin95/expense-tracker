// Higher Order Component (HOC) - A component (HOC) that renders another component
    // Reuse code
    // Render hijacking
    // Prop manipulation
    // Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireWithAuthentication = (WrappedComponent) => {    
    return (props) => (
        <div>
            {props.isAuthenticated && <WrappedComponent {...props}/>} 
            {!props.isAuthenticated && <p>Authenticate yourself before you wreck yourself</p>}
        </div>
    );
};

const AuthInfo = requireWithAuthentication(Info);

ReactDOM.render(<AuthInfo info="there are the secret details"/>, document.getElementById('app'));