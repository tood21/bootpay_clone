import React from 'react';
import {Outlet} from "react-router-dom";

import HeaderContainer from "./Header/HeaderContainer";


const MainLayout = () => {
    return (
        <>
            <HeaderContainer />
            <Outlet />
            <footer>풋터</footer>
        </>
    );
};

export default MainLayout;
