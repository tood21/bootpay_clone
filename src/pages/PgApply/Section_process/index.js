import React from 'react';
import styled from "styled-components";

import bootpayLogo from "assets/images/PgApply/section_process_bootpay_dark.svg"
import ProcessContainer from "./ProcessContainer";

const Section_process = () => {
    return (
        <Section>
            <SectionInner>
                <Title>
                    <h3><img src={bootpayLogo} alt="부트페이" /><span className="sr-only">부트페이</span>는 간편한 PG가입을 제공합니다</h3>
                    <p>신규/기존 가입자 누구나 손쉽게 가입할 수 있습니다.</p>
                </Title>
                <ProcessContainer />

            </SectionInner>
        </Section>
    );
};

export default Section_process;

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 150px 3% 160px;
`

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Title = styled.div`
  color: #2f374d;
  text-align: center;
  margin-bottom: 69px;
  h3 {
    font-size: 2.375rem;
    line-height: 1.6;
  }
  p {
    padding-top: 20px;
    font-size: 1.0625rem;
    line-height: 1.52;
  }
 
  img {
    width: 140px;
  }
`