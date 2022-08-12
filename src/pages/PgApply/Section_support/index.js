import React from 'react';
import styled from "styled-components";

import bg from "assets/images/PgApply/top_bg.svg"
import ContentContainer from "./ContentContainer";

const Section_support = () => {
    return (
        <Section>
            <SectionHeader>
                <h3>부트페이 스타트업 패키지</h3>
                <p>스타트업을 위해 저렴한 PG 수수료를 제공합니다</p>
            </SectionHeader>
            <SectionBody>
                <ContentContainer />
            </SectionBody>
        </Section>
    );
};

export default Section_support;

const Section = styled.section`
`
const SectionHeader = styled.div`
  width: 100%;
  height: 480px;
  padding-top: 210px ;
  background: url(${bg}) no-repeat 0 70px / cover ;
  color: #fff;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    line-height: 1.6;
    font-weight: 700;
  }
  
  p {
    font-size: 1.1875rem;
    line-height: 1.52;
  }

`

const SectionBody = styled.div`
  max-width: 1100px;
  display: flex;
  margin: -100px auto 0;
  
  
`