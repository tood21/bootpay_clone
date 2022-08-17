import React from 'react';
import styled from "styled-components";
import ListContainer from "./ListContainer";

const Section_alliance = () => {
    return (
        <Section>
            <SectionInner>
                <Title>
                    <h3>부트페이 제휴 PG사</h3>
                    <p>VAT별도</p>
                </Title>
                <ListContainer />

            </SectionInner>
        </Section>
    );
};

export default Section_alliance;

const Section = styled.section`
  width: 100%;
  background-color: #f7f9fc;
  padding: 120px 3% 160px;

`

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Title = styled.div`
  text-align: center;
  font-weight: 700;
  h3 {
    font-size: 2.125rem;
    line-height: 1.588;
    color: #2f374d
  }
  
  p {
    font-size: 0.875rem;
    line-height: 1.571;
    color: #586981;
  }
`
