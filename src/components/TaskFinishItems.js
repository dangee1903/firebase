import React, { useState, useEffect } from 'react';

function TaskFinishItems(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {
            
        }
    }, []);
    const {name,email,key} = props.item;
    return (
        <li className="list-group-item">
            <p className="task">{name}</p>
            <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{email}</span>
        </li>
    )
}

export default TaskFinishItems;