import React from 'react';
import AppRoute from './routes/AppRoute';
import {axiosInit} from "./api/axiosInit";

function App() {

    axiosInit();

    return (
       <AppRoute />
    );
}

export default App;
