import React, { useState, useEffect } from 'react';
import FormAddTask from './FormAddTask'
import TaskDoingItems from './TaskDoingItems'
import { tasksRef } from './../firebase'
function TaskDoingList(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const listener = tasksRef.on("value",items=>{
            let Data = [];
            items.forEach((item,index) =>{
                let {name,email} = item.val();
                Data.push({name,email,key : item.key})
            })
            setData(Data);
        })
        return () => {
            tasksRef.off('value', listener);
        }
    }, [tasksRef]);
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Doing</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {showItems(data)}
                    </ul>
                </div>
                <div className="panel-footer text-right">
                    <FormAddTask />
                </div>
            </div>
        </div>
    )
    function showItems(data){
        let xhtml = null;
        if(data.length > 0){
            xhtml = data.map( (item,index) =>{
                return ( <TaskDoingItems key={index} item={item} index={index}/> );
            })
        }
        return <ul className="list-group">{xhtml}</ul>
    }
}

export default TaskDoingList;