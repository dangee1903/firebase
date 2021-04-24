import React, { useState, useEffect } from 'react';
import TaskFinishItems from './TaskFinishItems'
import TaskFinishItemsAdmin from './../components/TaskFinishItemsAdmin'
import { taskCompletedRef } from './../firebase'
import {actChangeNotify} from './../actions/index'
import { connect } from 'react-redux'
import * as notify from './../constants/Notify'
function TaskFinishList(props) {
    const [data, setData] = useState([]);
    const [isAdmin,setIsAdmin] = useState(true);
    useEffect(() => {
        const listener = taskCompletedRef.on("value",items=>{
            let Data = [];
            items.forEach((item,index) =>{
                let {name,email} = item.val();
                Data.push({name,email,key : item.key})
            })
            setData(Data);
        })
        return () => {
            taskCompletedRef.off('value', listener);
        }
    }, [taskCompletedRef]);
    function handelClearALl() {
        if (window.confirm("Bạn có chắc chắn xóa không ?")) {
            props.changeNotify(notify.NOTI_TYPE_DANGER,notify.NOTI_REMOVE_TASK_TITLE,notify.NOTI_REMOVE_TASK_MESSGAE);
            taskCompletedRef.set([]);
        }
    }
    const showData = (data,isAdmin)=>{
        let xhtml = null;
        if(data.length > 0 ){
            if(isAdmin == true){
                xhtml = data.map( (item,index) => {
                    return (
                        <TaskFinishItemsAdmin changeNotify={props.changeNotify} item={item} key={index}/>
                    )
                })
            }else{
                xhtml = data.map( (item,index) => {
                    return (
                        <TaskFinishItems item={item} key={index}/>
                    )
                })
            }
        }else{
            // xhtml = <p>Loading...</p>;
        }
        return xhtml;
    }
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Task Finish</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {showData(data,isAdmin)}
                    </ul>
                </div>
                <div className="panel-footer text-right">
                    <button onClick={()=> handelClearALl()}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        changeNotify: (type,title,content) => {
            dispatch(actChangeNotify(type,title,content))
        }
    }
}
export default connect(null,mapDispatchToProps)(TaskFinishList);