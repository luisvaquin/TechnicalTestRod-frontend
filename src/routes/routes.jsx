import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";
import Login from "../pages/login";
import ResetPassword from "../pages/resetPass";
import AccountUser from "../pages/account";
import InfoAccount from "../pages/InfoAccount";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
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
        path: "/InfoAccount",
        element: <InfoAccount />,
    },
]);

function Routes() {
    return (
        <RouterProvider router={routes} />
    );
}

export default Routes;