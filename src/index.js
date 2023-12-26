import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import Error from './components/Error';
import Body from './components/Body';
import Contact from './components/Contact';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";



const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
              },
        ],
        errorElement: <Error />,
    }
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
