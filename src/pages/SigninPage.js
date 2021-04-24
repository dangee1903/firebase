import React, { useState, useEffect } from 'react';
import FormLogin from './../components/FormLogin'
function SigninPage(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <FormLogin />
    )
}

export default SigninPage;