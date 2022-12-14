import React from 'react';
import styled from "styled-components";

import Section_PaymentLink from "./Section_PaymentLink";
import Section_period from "./Section_period";
import Section_support from "./Section_support"
import Section_API from "./Section_API";
import Section_Payment from "./Section_Payment";
import Section_PG from "./Section_PG";
import Section_analysis from "./Section_analysis";
import Section_fee from "./Section_fee";
import Section_link from "./Section_link";

const Home = () => {
    return (
        <Container>
            <h2 className="sr-only">부트페이 메인페이지</h2>
            <Section_PaymentLink />
            <Section_period />
            <Section_support />
            <Section_API />
            <Section_Payment />
            <Section_PG />
            <Section_analysis />
            <Section_fee />
            <Section_link />
        </Container>
    );
};

export default Home;

const Container = styled.main`
    
`
