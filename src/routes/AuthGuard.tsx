import React from "react";
import {useAppSelector} from "../store/storeHooks";
import {Navigate, Outlet} from "react-router-dom";

export default function AuthGuard () {
    const authToken = useAppSelector(state => state.auth.token);

    return (authToken === '') ? <Navigate to={'/'} /> : <Outlet />;
}
