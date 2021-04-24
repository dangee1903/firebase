import React, { useState, useEffect } from 'react';

function Menu(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <div className="page-header">
            <h1>Project 05 - Bug Reporting <small>React Redux Router Firebase</small></h1>
        </div>
    )
}

export default Menu;