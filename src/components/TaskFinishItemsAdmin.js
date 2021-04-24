import React, { useState, useEffect } from 'react';
import { taskCompletedRef } from './../firebase'
import * as notify from './../constants/Notify'
function TaskFinishItemsAdmin(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {
            
        }
    }, []);
    function handelDelete(key) {
        taskCompletedRef.child(key).remove();
        props.changeNotify(notify.NOTI_TYPE_DANGER,notify.NOTI_REMOVE_TASK_TITLE,notify.NOTI_REMOVE_TASK_MESSGAE);
    }
    const {name,email,key} = props.item;
    return (
        <li className="list-group-item">
            <p className="task">{name}</p>
            <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{email}</span>
            <button onClick={()=>handelDelete(key)}>Delete</button>
        </li>
    )
}

export default TaskFinishItemsAdmin;