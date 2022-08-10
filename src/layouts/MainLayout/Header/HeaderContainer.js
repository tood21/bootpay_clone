import React, {useState, useEffect} from 'react';
import styled from "styled-components";


import bootpay_logo_white from "assets/images/MainLayout/bootpay_logo_white.svg"
import bootpay_logo_dark from "assets/images/MainLayout/bootpay_logo_dark.svg"

import Header from "./Header";
import {useLocation} from "react-router-dom";
import MobileHeader from "./MobileHeader";


const HeaderContainer = () => {
    const path = useLocation().pathname
    const [nav, setNav] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showList, setShowList] = useState(false)



    const menus = [
        {
            id: "overview",
            title: "살펴보기",
            url: "/overview",
        },
        {
            id: "pg_apply",
            title: "PG가입하기",
            url: "/pg_apply",
        },
        {
            id: "guide",
            title: "결제연동하기",
            url: "/guide",
        },
        {
            id: "analytics",
            title: "데이터분석",
            url: "/analytics",
        },
        {
            id: "payment_agent",
            title: "지급대행",
            url: "/payment_agent",
        },
        {
            id: "help",
            title: "도움말",
            url: "/help",
        },
    ]

    useEffect(()=>{
        window.addEventListener('scroll', updateScrollPosition);
    },[]);

    const updateScrollPosition = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        navBarEvent()
    },[scrollPosition, path]);

    const navBarEvent = () => {
        if(path === "/" && scrollPosition > 70) {
            setNav(true)
        }

        if(path === "/" && scrollPosition < 70) {
            setNav(false)
        }

        if(path !== "/") {
            setNav(true)
        }
    }

    return (
        <Container style={{backgroundColor: nav ? "white" : "transparent"}}>
            {
                nav ? <Header menus={menus} logo={bootpay_logo_dark} path={path} /> :
                    <Header menus={menus} logo={bootpay_logo_white} path={path} color="white" />
            }

            {
                nav ? <MobileHeader menus={menus} logo={bootpay_logo_dark} path={path} showList={showList} setShowList={setShowList}  /> :
                    <MobileHeader logo={showList ? bootpay_logo_dark:bootpay_logo_white} path={path} menus={menus} color={showList? "#2f374d" : "#fff"} showList={showList} setShowList={setShowList}  />
            }
        </Container>
    );
};

export default HeaderContainer;


const Container = styled.header`
  box-shadow: 0 4px 10px rgb(25 25 25 / 10%);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 750;
  transition: all 1s;
`

