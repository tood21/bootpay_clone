import React from 'react';
import styled from "styled-components";

import step3 from "assets/images/Guide/step3.png";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Step3 = () => {
    return (
        <Container>
            <LeftColumn>
                <div>
                    <p>STEP 3</p>
                    <p>결제수단</p>
                    <p>활성</p>
                </div>
                <div>
                    <p>[MENU] 결제연동 > 결제수단관리</p>
                    <p>
                        여러 PG사를 활성화하거나, 특정 PG사의 카드, 휴<br/>
                        대폰, 계좌이체 등 사용하실 결제수단을 선택하실<br/>
                        수 있습니다.
                    </p>
                    <p>결제창을 테스트할 수 있는 기능을 지원합니다.</p>
                </div>
            </LeftColumn>
            <RightColumn>
                <img src={step3} alt="step3"/>
            </RightColumn>
            <LinkButton>
                    <span>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
            </LinkButton>
        </Container>
    );
};

export default Step3;

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