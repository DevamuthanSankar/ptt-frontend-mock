import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Login from '../views/Login';
import Signup from '../views/Signup';

import Dashboard from '../views/Dashboard/Dashboard';
import Home from '../views/Dashboard/Home';
import ViewUser from '../views/Dashboard/ViewUser';
import AuthGuard from "./AuthGuard";

export default class AppRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Navigate replace to={'/login'}/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'signup'} element={<Signup/>}/>
                    <Route element={<AuthGuard />}>
                        <Route path={'dashboard'} element={<Dashboard />}>
                            <Route path={''} element={<Home/>}/>
                            <Route path={'user'} element={<ViewUser/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
