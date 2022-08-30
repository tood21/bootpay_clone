import React from 'react'
import styled from 'styled-components'

import bannerBG from 'assets/images/PaymentAgent/banner_background.jpg'

const BannerSection = () => {
  return (
    <Container>
        <Title>지급대행</Title>
    </Container>
  )
}

export default BannerSection

const Container = styled.div`
    width: 100%;
    height: 240px;
    background: url(${bannerBG});
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    font-size: 3.125rem;
    line-height: 1.6;
    color: #fff;
`