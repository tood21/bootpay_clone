import React from 'react';
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

import Button from "components/Button";
import tablet from "assets/images/Home/tablet.svg"
import useScrollFadeIn from "hooks/useScrollFadeIn";



const Section_period = () => {
    const tabletAnimation = useScrollFadeIn(2, 0, 'up');
    const textAnimation = useScrollFadeIn(2, 0, 'right');
    const buttonAnimation = useScrollFadeIn(2, 0, 'right');
    const titleAnimation = useScrollFadeIn(2, 0.2, 'none');


    return (
        <Section>
            <h3 className="sr-only">개발 기간 단축</h3>
            <SectionInner>
                <SectionTextContainer>
                    <Title {...titleAnimation}>
                        부트페이를 통하면<br/>
                        <span>개발기간이 단축됩니다</span>
                    </Title>
                    <Description {...textAnimation}>
                        <div>
                            <p>
                                <IconContainer>
                                    <StyledFontAwesomeIcon icon={faCheck}/>
                                </IconContainer>
                                <span>PG 계약</span> 상관없이 즉시 개발
                            </p>
                            <p>
                                <IconContainer>
                                    <StyledFontAwesomeIcon icon={faCheck}/>
                                </IconContainer>
                                <span>웹, 앱 SDK</span> 모두 지원
                            </p>
                            <p>
                                <IconContainer>
                                    <StyledFontAwesomeIcon icon={faCheck}/>
                                </IconContainer>
                                소스코드 수준의 <span>기술지원</span>
                            </p>
                        </div>
                    </Description>
                    <div {...buttonAnimation}>
                        <Button >개발매뉴얼 바로가기</Button>
                    </div>
                </SectionTextContainer>
                <SectionImgContainer>
                    <Tablet {...tabletAnimation} src={tablet} alt="tablet" />
                </SectionImgContainer>
            </SectionInner>
        </Section>
    );
};

export default Section_period;

const Section = styled.section`
  width: 100%;
  background-color: #f7f9fc;
`
const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 3%;
`

const SectionTextContainer = styled.div`
  color: #2f374d;
  width: calc(100% * (5 / 12));
  padding-bottom: 120px;

  @media screen and (max-width: 900px) {
      width: 100%;
    text-align: center;
    padding-bottom: 80px;

  }
`

const Title = styled.p`
  font-size: 2.375rem;
  line-height: 1.2;
  font-weight: 300;
  padding-top: 80px;

  > span {
    font-weight: 400;
  }
`

const Description = styled.div`
  padding-top: 30px;
  font-size: 1.06rem;
  line-height: 1.5;
  padding-bottom: 70px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    @media screen and (max-width: 900px) {
      text-align: left;
      margin-bottom: 10px;
    }
    span {
      font-weight: 700;
    }
  }
`
const IconContainer = styled.span`
  display: inline-block;
  text-align: center;
  line-height: 20px;
  background-color: aqua;
  color: white;
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 14px;
  `

const SectionImgContainer = styled.div`
  width: calc(100% * (7/12));
  position: relative;
`


const Tablet = styled.img`
  width: 700px;
  position: absolute;
  top: 0;
  z-index: 280;

  @media screen and (max-width: 900px) {
    display: none;
  }
`