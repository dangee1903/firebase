import React, { useState, useEffect } from 'react';

function NotfoundPage(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <h2>
            Trang bạn tìm không tồn tại.
        </h2>
    )
}

export default NotfoundPage;