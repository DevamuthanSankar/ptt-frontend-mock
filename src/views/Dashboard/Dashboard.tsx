import React from 'react';
import { Outlet } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                Dashboard Page
                <Outlet />
            </div>
        );
    }
}

export default Dashboard;