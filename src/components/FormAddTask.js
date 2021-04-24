import React, { useState, useEffect } from 'react';
import { tasksRef } from './../firebase'
import { actChangeNotify } from './../actions/index'
import * as notify from './../constants/Notify'
import {connect} from 'react-redux';
function FormAddTask(props) {
    const [task, setTask] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);
    function handelSubmit(e){
        e.preventDefault();
        tasksRef.push({
            name: task,
            email: "dangee1903@gmail.com"
        });
        props.changeNotify(notify.NOTI_TYPE_SUCCESS,notify.NOTI_ADD_TASK_TITLE,notify.NOTI_ADD_TASK_MESSGAE);
        setTask('');
    }
    function handelChange(value){
        setTask(value);
    }
    return (
        <form className="form-inline" onSubmit={ (e) => handelSubmit(e)}>
            <div className="form-group">
            <input onChange={(e)=> handelChange(e.target.value)} type="text" value={task} name="task" className="form-control" placeholder="Task" />
            </div>
            <button type="submit" className="btn btn-info">Add</button>
        </form>
    )
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        changeNotify: (type,title,content) => {
            dispatch(actChangeNotify(type,title,content))
        }
    }
}
export default connect(null,mapDispatchToProps)(FormAddTask);