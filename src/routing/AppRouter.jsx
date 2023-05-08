import React from 'react';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";


import Main from "../pages/main";



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Main />}>

    </Route>
));

const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default AppRouter;