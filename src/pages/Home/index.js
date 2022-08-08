import React from 'react';
import styled from "styled-components";
import Section_PaymentLink from "./Section_PaymentLink";
import Section_period from "./Section_period";

const Home = () => {
    return (
        <Container>
                <Section_PaymentLink />
                <Section_period />
        </Container>
    );
};

export default Home;

const Container = styled.main`
    
`
