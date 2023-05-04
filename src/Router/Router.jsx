import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home';
import Login from '../LoginReg/Login';
import Register from '../LoginReg/Register';
import Error from '../Components/Error';
import Blog from '../Components/Blog';
import About from '../Components/About';
import ChefRecipe from '../Components/ChefRecipe';
import Recipe from '../Components/Recipe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:3000/chef')
            },
            {
                path: '/chef/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({params})=> fetch(`http://localhost:3000/chef/${params.id}`)
            },
            {
                path: '/recipe/:id',
                element: <Recipe></Recipe>,
                loader: ({params})=> fetch(`http://localhost:3000/recipe/${params.id}`)
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