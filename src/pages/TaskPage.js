import React, { useState, useEffect } from 'react';
import TaskDoingList from '../components/TaskDoingList'
import TaskFinishList from '../components/TaskFinishList'
function TaskPage(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <TaskDoingList />
            <TaskFinishList />
        </div>
    )
}

export default TaskPage;