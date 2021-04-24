import React from 'react';
import NotfoundPage from './pages/NotfoundPage'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import UserPage from './pages/UserPage'
import TaskPage from './pages/TaskPage'
const routes = [
    {
        path : '/',
        exact: true,
        main: () => <TaskPage />
    },
    {
        path : '/user',
        exact: true,
        main: () => <UserPage />
    },
    {
        path : '/signin',
        exact: true,
        main: () => <SigninPage />
    },
    {
        path : '/signup',
        exact: true,
        main: () => <SignupPage />
    },
    {
        path : '/task',
        exact: true,
        main: () => <TaskPage />
    },
    {
        path : '',
        exact: false,
        main: () => <NotfoundPage />
    }
]
export default routes