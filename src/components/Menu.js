import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route , NavLink} from 'react-router-dom'
function Title(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <div className="list-group">
                <NavLink exact className="list-group-item" to="/" activeClassName="active">Task</NavLink>
                <NavLink exact className="list-group-item" to="/user" activeClassName="active">User</NavLink>
                <NavLink exact className="list-group-item" to="/signin" activeClassName="active">Sginin</NavLink>
                <NavLink exact className="list-group-item" to="/signup" activeClassName="active">Sginup</NavLink>
            </div>
        </div>
    )
}

export default Title;