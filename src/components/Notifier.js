import React, { useState }  from 'react';
import { AlertList, Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
import { actHideNotify } from './../actions/index'
const NotifierGenerator = (props) => {
    const {isShow,style,title,content} = props.item;
    const handelClose = () =>{
        props.hideNotify();
    }
	return (
		<div>
            {isShow == true  ?
            <AlertContainer position="top-right">
                <Alert type={style} headline={title} onDismiss={() => handelClose()} timeout={3000}>
                    {content}
                </Alert>
            </AlertContainer>
            : ""}
        </div>
	);
}
const mapStateToProps = state => {
    return {
        item : state.Notify
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        hideNotify : () => {
            dispatch(actHideNotify());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NotifierGenerator);