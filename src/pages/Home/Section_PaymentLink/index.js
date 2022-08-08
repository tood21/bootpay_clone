import React from 'react';
import styled from "styled-components";

import BGimg from "assets/images/Home/section_1_bg.svg"
import phone from "assets/images/Home/phone.svg"
import laptop from "assets/images/Home/laptop.svg"

import Button from "components/Button"

const Section_PaymentLink = () => {
    return (
        <Section>
            <SectionInner>
                <SectionTextContainer>
                    <Title>
                        부트페이로 <br/>
                        <span>결제 연동 하세요</span>
                    </Title>
                    <Description>
                        소스코드 한 줄 연동<br />
                        모든 결제 시나리오 지원<br />
                        안정적인 서비스 운영 및 보안<br />
                        무료 통계 서비스 제공
                    </Description>
                    <Button>관리자 페이지 체험하기</Button>
                </SectionTextContainer>
                <SectionImgContainer>
                    <PhoneImg src={phone} alt="phone"  />
                    <LapImg src={laptop} alt="laptop" />
                </SectionImgContainer>
            </SectionInner>
        </Section>
    );
};

export default Section_PaymentLink;



const Section = styled.section`
  background: url(${BGimg}) no-repeat center / cover;
  padding-top: 100px;
  width: 100%;
`

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
`

const SectionTextContainer = styled.div`
  color: #fff;
  width: calc(100% * (5/12));
  padding-bottom: 120px;
`
const Title = styled.p`
  font-size: 50px;
  line-height: 1.2;
  font-weight: 300;
  padding-top: 120px;
   > span {
     font-weight: 700;
   }
`

const Description = styled.p`
  padding-top: 30px;
  font-size: 17px;
  line-height: 1.5;
  padding-bottom: 70px;
`

const SectionImgContainer = styled.div`
  width: calc(100% * (7/12));
  position: relative;
`

const PhoneImg = styled.img`
  position: absolute;
  width: 300px;
  z-index: 300;
  top: 40px;
  
  
`
const LapImg = styled.img`
  position: absolute;
  width: 300px;
  width: 110%;
  left: 150px;
  top: 120px;
`