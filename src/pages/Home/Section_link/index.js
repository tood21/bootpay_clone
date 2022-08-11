import React from 'react';
import styled from "styled-components";

import bootpayLogo from "assets/images/MainLayout/bootpay_logo_white.svg"
import Button from "components/Button";

const Section_link = () => {


    return (
        <Section>
            <h3 className="sr-only">서비스 비용</h3>
            <SectionInner>
                <TextContainer>
                    <p>무료 결제 연동 API 서비스</p>
                    <img src={bootpayLogo} alt="부트페이로고" />
                </TextContainer>
                <ButtonContaner>
                    <Button>관리자 페이지 체험하기</Button>
                </ButtonContaner>
            </SectionInner>
        </Section>
    );
};

export default Section_link;

const Section = styled.section`
  width: 100%;
  background-color: #4135bb;
  padding: 50px 3% 50px;
`
const SectionInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px){
    flex-direction: column;
  }
`
const TextContainer = styled.div`
  display: flex;
  width: 50%;
  @media screen and (max-width: 900px){
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }
  p {
    color: #fff;
    font-size: 1.25rem;
    line-height: 1.6;
  }
  img {
    margin-left: 10px;
    margin-bottom: 4px;
    width: 110px;
  }
`

const ButtonContaner = styled.div`
  button {
    background: #fff;
    color: #4529e5;
    font-size: 17px;
    line-height: 27px;
    padding: 16px 30px;
  }
`