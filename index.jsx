import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement : <Error/>,
        children: [
            {
                path:'/',
                element: <Home/>,
                errorElement : <Error/>,
            },
            {
                path:'contact',
                element:<div>Contact page</div>,
                errorElement : <Error/>,
            },
            {
                path:'about',
                element:<div>About page</div>,
                errorElement : <Error/>,
            },
            {
                path:'feature',
                element:<div>Feature page</div>,
                errorElement : <Error/>,
            },
            {
                path:'/:country',
                element: <CountryDetail/>,
                errorElement : <Error/>,
            },
            
        ],
    },
])
const root = createRoot(document.querySelector('#root'))


root.render(<RouterProvider router={router} />)