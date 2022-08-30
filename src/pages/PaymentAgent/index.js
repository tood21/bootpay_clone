import React from 'react';
import styled from "styled-components";

import BannerSection from './BannerSection';
import ContentSection from './ContentSection';

const PaymentAgent = () => {
    return (
        <Container>
            <Inner>
                <BannerSection />
                <ContentSection />
            </Inner>
        </Container>
    );
};

export default PaymentAgent;

const Container = styled.div`

`
const Inner = styled.div`

`
