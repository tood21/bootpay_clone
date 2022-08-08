import React from 'react';
import {Outlet} from "react-router-dom";

import HeaderContainer from "./Header/HeaderContainer";
import Footer from "./Footer/Footer";


const MainLayout = () => {
    return (
        <>
            <HeaderContainer />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
