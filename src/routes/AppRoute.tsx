import React from 'react';
import {Routes, Route, Navigate, HashRouter} from 'react-router-dom';

import Login from '../views/Login';
import Signup from '../views/Signup';

import Dashboard from '../views/Dashboard/Dashboard';
import Home from '../views/Dashboard/Home';
import ViewUser from '../views/Dashboard/ViewUser';
import AuthGuard from "./AuthGuard";

import Page404 from "../views/Page404";

export default class AppRoute extends React.Component {
    baseUrl = process.env.REACT_APP_API_URL || 'https://reqres.in/'
    render() {
        return (
            <HashRouter basename={'https://DevamuthanSankar.github.io/ptt-frontend-mock/'}>
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
                    <Route path={'*'} element={<Page404 />} />
                </Routes>
            </HashRouter>
        );
    }
}
