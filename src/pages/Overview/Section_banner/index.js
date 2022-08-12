import React from 'react';

import styled from "styled-components";

import bannerBG from "assets/images/Overview/top_banner_bg.svg"

const Section_banner = () => {
    return (
        <Section>
            <SectionInner>
                <h3>세상의 모든 결제 시나리오</h3>
                <p>부트페이는 모든 결제 시나리오를 지원합니다.</p>
            </SectionInner>
        </Section>
    );
};

export default Section_banner;

const Section = styled.section`
  background: url(${bannerBG});
  padding: 120px 3% 50px;
`
const SectionInner = styled.div`
  max-width: 1280px;
  text-align: center;
  color: #555;
  margin: 0 auto;
  

  h3 {
    font-size: 2.8125rem;
    line-height: 1.6;
    font-weight: 700;
  }
  
  p {
    font-size: 1.56rem;
    line-height: 1.6;
  }
  @media screen and (max-width: 900px) {
    h3 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
`


