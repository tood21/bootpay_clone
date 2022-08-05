import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <header>헤더</header>
            <Outlet />
            <footer>풋터</footer>
        </div>
    );
};

export default MainLayout;
