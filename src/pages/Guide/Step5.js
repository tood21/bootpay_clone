import React from 'react';
import styled from "styled-components";

import step5 from "assets/images/Guide/step5.png";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Step5 = () => {
    return (
        <Container>
            <LeftColumn>
                <div>
                    <p>STEP 5</p>
                    <p>보안설정</p>
                    <p>진행</p>
                </div>
                <div>
                    <p>[MENU] 결제연동 > IP 및 인증키 관리</p>
                    <p>
                        부트페이와 통신하실 서버의 IP를 등록하고, 통신<br/>
                        시 필요한 키를 발급받아 사용합니다.
                    </p>
                </div>
            </LeftColumn>
            <RightColumn>
                <img src={step5} alt="step5"/>
            </RightColumn>
            <LinkButton>
                    <span>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
            </LinkButton>
        </Container>
    );
};

export default Step5;

const Container = styled.div`
  border: solid 1px #d7dadd;
  border-radius: 3px;
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
`

const LeftColumn = styled.div`
  width: 46.7777%;
  display: flex;
  padding: 30px 20px 30px 30px;

  > div {

    &:nth-child(1) {
      width: 180px;

      p {
        font-size: 2.125rem;
        line-height: 1.2;
        font-weight: 700;

        &:nth-child(1) {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #8a92a5;
          font-weight: 700;
        }

        &:nth-child(2) {
          color: #2f374d;
        }

        &:nth-child(3) {
          color: #4a2beb;
        }
      }
    }

    &:nth-child(2) {
      padding-top: 34px;

      p {
        font-size: 1.0625rem;
        line-height: 1.58823;
        color: #6e7c91;
        font-weight: 700;


        &:nth-child(2) {
          font-weight: 400;
          margin-top: 10px;
        }
      }
    }
  }
`

const RightColumn = styled.div`
  width: 53.2256%;
  padding: 30px 60px;
  background-color: #FAFBFD;

  img {
    width: 100%;
  }
`

const LinkButton = styled.button`
  position: absolute;
  top: -16px;
  right: -16px;
  font-size: 1rem;
  color: #fff;
  background-color: #2f374d;
  padding: 5px 10px;
  border-radius: 24px;
  span {
    position: relative;
    transition: all 0.5s;
    &::before {
      content: "바로가기";
      position: absolute;
      width: 0;
      left: 5px;
      transition: all 0.5s;
      overflow: hidden;
      word-break: keep-all;
    }
  }
  
  &:hover {
    span {
      padding-left: 80px;
      padding-right: 5px;
      &::before {
        width: 70px;
        display: block;
      }
    }
  }
`