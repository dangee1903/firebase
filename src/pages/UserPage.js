import React, { useState, useEffect } from 'react';
import FormUser from './..//components/FormUser'
function UserPage(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <FormUser />
    )
}

export default UserPage;