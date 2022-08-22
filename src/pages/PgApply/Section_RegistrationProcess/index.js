import React from 'react';
import styled from "styled-components";

import ListItem from "./ListItem";

import registrationProcessData from "./registrationProcessData";

import InfoFooter from "./InfoFooter";

const Section_RegistrationProcess = () => {

    return (
        <Section>
            <SectionInner>
                <Title>
                    <h3>PG 가입절차</h3>
                    <p>기존 PG 가입자는 부트페이 연동 후, 한달 이내에 PG 재가맹을 해주시면 됩니다.</p>
                </Title>
                <List >
                    {registrationProcessData.map((data)=>(
                        <ListItem key={data.id} data={data} />
                    ))}
                </List>
                <InfoFooter />

            </SectionInner>
        </Section>
    );
};

export default Section_RegistrationProcess;

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 150px 3% 160px;
`

const SectionInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
const Title = styled.div`
  color: #2f374d;
  padding: 15px 20px 30px 0;

  h3 {
    font-size: 1.625rem;
    line-height: 1.6;
    font-weight: 700;
  }

  p {
    padding-top: 10px;
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`

const List = styled.ul`
  border-top: 2px solid #2f374d;
  margin-bottom: 160px;
`

