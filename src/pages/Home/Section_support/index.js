import React from 'react';
import styled from "styled-components";

import supportPg from "assets/images/Home/section_support_pg.svg"
import supportBootpay from "assets/images/Home/section_support_bootpay.svg"
import supportLang from "assets/images/Home/section_support_lang.svg"
import rightArrow from "assets/images/Home/section_support_rightArrow.svg"
import inFoIcon from "assets/images/Home/section_support_infoIcon.svg"



const Section_support = () => {
    return (
        <Section>
            <h3 className="sr-only">지원 PG, 언어 소개</h3>
            <SectionInner>
                <TitleContainer>
                    <div>
                        <p>국내외 여러 PG를 소스코드 한줄로</p>
                        <p>복수 PG 이용도 무료</p>
                    </div>
                    <div>
                        <p>다양한 결제수단도 소스코드 한줄로</p>
                        <p>다양한 샘플 제공</p>
                    </div>
                </TitleContainer>
                <ImgContainer>
                    <div>
                        <img src={supportPg} alt="지원PG"/>
                        <Description>지원 PG : KCP , 다날 , KG이니시스, 토스페이먼츠, 네이버페이 등</Description>
                    </div>
                    <div>
                        <ArrowImg src={rightArrow} alt="오른쪽 화살표" />
                        <img src={supportBootpay} alt="부트페이"/>
                        <ArrowImg src={rightArrow} alt="오른쪽 화살표" />
                    </div>
                    <div>
                        <img src={supportLang} alt="지원언어"/>
                        <Description>지원 언어 : Android, iOS, Flutter, JavaScript 등</Description>
                    </div>
                </ImgContainer>
            </SectionInner>
        </Section>
    );
};

export default Section_support;

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 150px 0 170px;
`
const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const TitleContainer = styled.div`
  display: flex;
  width: 100%;

  div {
    width: 50%;
    
    &:nth-child(2) {
      text-align: right;
    }

    p {
      color: #2f374d;
      font-size: 2.375rem;
      line-height: 1.2;

      &:nth-child(2) {
        font-weight: 300;
      }
    }
    
  }
`

const ImgContainer = styled.div`
  display: flex;
  position: relative;
  padding-top: 130px;
  
  > div {
    width: calc(100% / 3)
  }
  &:nth-child(2) {
    text-align: center;
  }
`
const ArrowImg = styled.img`
  width: 20px;
  position: absolute;
  top: 55%;
  left: 62%;
  &:nth-child(1) {
    top: 55%;
    left: 36%;
  }
  &:nth-child(2) {
    top: 55%;
    left: 62%;
  }
`

const Description = styled.p`
  display: inline-block;
  font-size: 0.9375rem;
  color: #4529e5;
  background-color: #cafcfa;
  border-radius: 1.25rem;
  padding: 4px 20px 8px 40px;
  line-height: 1.7;
  position: relative;
  margin-top: 30px;
  &::before {
    content: "";
    background: url(${inFoIcon}) no-repeat;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0;
  }
`