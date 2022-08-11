import React from 'react';
import styled from "styled-components";

import apiLink from "assets/images/Home/section_fee_api.svg"
import analysis from "assets/images/Home/section_fee_analysis.svg"
import report from "assets/images/Home/section_fee_report.svg"
import bootpayLogo from "assets/images/Home/section_fee_bootpay_dark.svg"
import arrowRight from "assets/images/Home/section_fee_arrowRight.svg"
import deleteIcon from "assets/images/Home/delete.png"

const Section_fee = () => {
    return (
        <Section>
            <h3 className="sr-only">서비스 비용</h3>
            <SectionInner>
                <ContentContainer>
                    <Content>
                        <img src={apiLink} alt="결제 모듈 연동" />
                        <p><span>30</span>만원</p>
                        <p>결제 모듈 연동</p>
                    </Content>
                    <Content>
                        <img src={analysis} alt="데이터 분석" />
                        <p>연<span>52</span>만원</p>
                        <p>데이터 분석</p>
                    </Content>
                    <Content>
                        <img src={report} alt="월별 리포트" />
                        <p>연<span>12</span>만원</p>
                        <p>월별 리포트</p>
                    </Content>
                </ContentContainer>
                <Description>
                    <img src={bootpayLogo} alt="부트페이" />
                    <span>이용 시 비용 총&nbsp;</span>
                    <span>94만원</span>
                    <img src={arrowRight} alt="오른쪽 화살표" />
                    <span>모두 무료!</span>
                </Description>
            </SectionInner>
        </Section>
    );
};

export default Section_fee;


const Section = styled.section`
  width: 100%;
  background-color: #f7f9fc;
  padding: 150px 5% 180px;
  @media screen and (max-width: 900px) {
    padding: 80px 5% 30px;

  }
`
const SectionInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
 
`

const Content = styled.div`
  text-align: center;
  width: calc(100% /3);
  @media screen and (max-width: 900px) {
    width: 50%;
    p {
      font-size: 1rem;
    }
  }
  p {
    &:nth-child(2) {
      margin-top: 2rem;
      color:#4135bb;
      margin-bottom: 10px;
      span {
        font-size: 3.125rem;
        font-weight: 600;
      }
    }
    &:nth-child(3) {
      color: #8a92a5;
    }
  }
  img {
    width: 140px
  }
`

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  span {
    font-size: 1.75rem;
    color: #2f374d;
    
    &:nth-child(3) {
      position: relative;
      &::after {
        content: '';
        display: block;
        background: url(${deleteIcon}) no-repeat center / 100% 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    
    &:nth-child(5) {
      color: #4135bb;
      font-weight: 600;
    }
  }
  
    img {
      &:first-child {
        width: 8rem;
      }
      &:nth-child(4) {
        width: 20px;
        margin: 0 10px;
      }
    }

`