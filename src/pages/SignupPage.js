import React, { useState, useEffect } from 'react';
import FormSignup from './../components/FormSignup'
function SignupPage(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <FormSignup />
    )
}

export default SignupPage;