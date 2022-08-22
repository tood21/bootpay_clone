import React from 'react';
import styled from "styled-components";

import Steps from "./Steps";

const Guide = () => {
    return (
        <Container>
            <Inner>
                <Title>
                    <h2>
                        <span>HOW TO</span><br/>
                        결제 연동하기
                    </h2>
                </Title>
                <Steps />

            </Inner>

        </Container>
    );
};

export default Guide;

const Container = styled.main`
  width: 100%;
  background-color: #fff;
  padding: 150px 5% 180px;

`
const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 {
    font-size: 2.125rem;
    line-height: 1.411;
    color: #2f374d;
    span{
      font-size: 1.125rem;
      line-height: 1.3888;
      color: #4a2beb;
      font-weight: 700;
    }
  }
`