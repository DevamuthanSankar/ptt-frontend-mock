import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from "../../components/Navbar";

export default function Dashboard() {

    return (
        <div className={'h-full w-full flex flex-col'}>
            <Navbar />
            <Outlet />
        </div>
    );
};
