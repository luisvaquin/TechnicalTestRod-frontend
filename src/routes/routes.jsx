import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";
import Login from "../pages/login";
import ResetPassword from "../pages/resetPass";
import AccountUser from "../pages/account";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/account",
        element: <AccountUser />,
    },
    {
        path: "/resetPassword",
        element: <ResetPassword />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function Routes() {
    return (
        <RouterProvider router={routes} />
    );
}

export default Routes;