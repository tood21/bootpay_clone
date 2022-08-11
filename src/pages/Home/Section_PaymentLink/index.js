import React from 'react';
import styled from "styled-components";

import BGimg from "assets/images/Home/section_1_bg.svg"
import phone from "assets/images/Home/phone.svg"
import laptop from "assets/images/Home/laptop.svg"

import Button from "components/Button"
import useScrollFadeIn from "hooks/useScrollFadeIn";

const Section_PaymentLink = () => {
    const phoneAnimation = useScrollFadeIn(2, 0, 'up');
    const laptopAnimation = useScrollFadeIn(2, 0, 'up');
    const textAnimation = useScrollFadeIn(2, 0, 'right');
    const buttonAnimation = useScrollFadeIn(2, 0, 'right');
    const titleAnimation = useScrollFadeIn(2, 0.2, 'none');

    return (
        <Section>
            <h3 className="sr-only">결제 연동 소개</h3>
            <SectionInner>
                <SectionTextContainer>
                    <Title {...titleAnimation}>
                        부트페이로 <br/>
                        <span>결제 연동 하세요</span>
                    </Title>
                    <Description {...textAnimation}>
                        소스코드 한 줄 연동<br />
                        모든 결제 시나리오 지원<br />
                        안정적인 서비스 운영 및 보안<br />
                        무료 통계 서비스 제공
                    </Description>
                    <div {...buttonAnimation}>
                        <Button >관리자 페이지 체험하기</Button>
                    </div>
                </SectionTextContainer>
                <SectionImgContainer>
                    <PhoneImg {...phoneAnimation} src={phone} alt="phone"  />
                    <LapImg {...laptopAnimation} src={laptop} alt="laptop" />
                </SectionImgContainer>
            </SectionInner>
        </Section>
    );
};

export default Section_PaymentLink;



const Section = styled.section`
  background: url(${BGimg}) no-repeat center / cover;
  padding: 6.25rem 3% 0;
  width: 100%;

  @media screen and (max-width: 900px) {
   padding-top: 70px;


  }
`

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  
`

const SectionTextContainer = styled.div`
  color: #fff;
  width: calc(100% * (5/12));
  padding-bottom: 7.5rem;
  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    padding-bottom: 0;
  }
  
`
const Title = styled.p`
  font-size: 3.125rem;
  line-height: 1.2;
  font-weight: 300;
  padding-top: 7.5rem;
   > span {
     font-weight: 700;
   }
`

const Description = styled.p`
  padding-top: 1.875rem;
  font-size: 1.06rem;
  line-height: 1.5;
  padding-bottom: 70px;
`

const SectionImgContainer = styled.div`
  width: calc(100% * (7/12));
  position: relative;
  @media screen and (max-width: 900px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    height: 500px;
  }
`

const PhoneImg = styled.img`
  position: absolute;
  width: 300px;
  z-index: 300;
  top: 40px;
  @media screen and (max-width: 900px) {
    left: 5%;
    width: 70%;
    max-width: 300px;
    
  }
  
  
`
const LapImg = styled.img`
  position: absolute;
  width: 900px;
  left: 150px;
  top: 120px;
  z-index: 290;
  @media screen and (max-width: 900px) {
    width: 150%;
    height: 450px;
    left: 0;    
    
  }
  @media screen and (max-width: 700px) {
    width: 150%;
    height: 450px;
    left: 20%;

  }

`