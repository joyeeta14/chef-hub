import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home';
import Login from '../LoginReg/Login';
import Register from '../LoginReg/Register';
import Error from '../Components/Error';
import Blog from '../Components/Blog';
import About from '../Components/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <Error></Error>
            },
        ]
    }
])

export default router;