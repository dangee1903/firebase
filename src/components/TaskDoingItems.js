import React, { useState, useEffect } from 'react';
import {tasksRef,taskCompletedRef} from './../firebase'
import { connect } from 'react-redux'
import * as notify from './../constants/Notify'
import { actChangeNotify } from './../actions/index'
function TaskDoingItems(props) {
    const [state, setState] = useState('');
    useEffect(() => {
        return () => {
        }
    }, []);
    console.log(notify.NOTI_COMPLETED_TASK_MESSGAE);
    function handelComplete(item){
        tasksRef.child(item.key).remove();
        taskCompletedRef.push(item);
        props.changeNotify(notify.NOTI_TYPE_INFO,notify.NOTI_COMPLETED_TASK_TITLE,notify.NOTI_COMPLETED_TASK_MESSGAE);
    }
    return (
        <li className="list-group-item">
            <p className="task">{props.item.name}</p>
            <span className="author"><span className="glyphicon glyphicon-user" aria-hidden="true" />&nbsp;{props.item.email}</span>
            <button type="button" className="btn btn-warning btn-xs" onClick={ () => handelComplete(props.item) } >Completed</button>
        </li>
    )
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        changeNotify: (style,title,content) =>{
            dispatch(actChangeNotify(style,title,content));
        }
    }
}
export default connect(null,mapDispatchToProps)(TaskDoingItems);