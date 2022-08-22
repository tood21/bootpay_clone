import React from 'react';
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Step7 = () => {
    const buttonData = [
        {
            id: 1,
            title: "PHP",
            url: ""
        },
        {
            id: 2,
            title: "Java",
            url: ""
        },
        {
            id: 3,
            title: "Node.js",
            url: ""
        },
        {
            id: 4,
            title: "Python",
            url: ""
        },
        {
            id: 5,
            title: "Ruby"
        },
    ]

    return (
        <Container>
            <LeftColumn>
                <div>
                    <p>STEP 7</p>
                    <p>결제검증</p>
                    <p>취소</p>
                </div>
            </LeftColumn>
            <RightColumn>
                <div>
                    <p>결제정보가 위변조 되었는지를 검증하고, 취소하는 로직을 구현합니다.</p>
                    <p>개발언어별로 Rest API 샘플을 지원합니다.</p>
                </div>
                <div>
                    <strong>언어별 샘플코드 보기</strong>
                    {
                        buttonData.map(data => (
                            <StyledButton key={data.id}>
                                {data.title}
                            </StyledButton>
                        ))
                    }

                </div>
            </RightColumn>
            <LinkButton>
                    <span>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </span>
            </LinkButton>
        </Container>
    );
};

export default Step7;

const Container = styled.div`
  border: solid 1px #d7dadd;
  padding: 30px 20px 30px 30px;
  border-radius: 3px;
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
`

const LeftColumn = styled.div`
  width: 15%;
  display: flex;

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


  }
`

const RightColumn = styled.div`
  width: 85%;

  div {
    font-size: 1.0625rem;
    line-height: 1.588;
    color: #6e7c91;
    margin-top: 34px;

    &:nth-child(2) {
      margin-top: 50px;
      font-weight: 700;

      strong {
        display: block;
        margin-bottom: 10px;
      }
    }
  }
`

const StyledButton = styled.button`
  font-size: inherit;
  font-weight: 700;
  color: inherit;
  background-color: #e9edf2;
  padding: 12px 20px;
  border-radius: 3px;
  min-width: 140px;
  margin-right: 10px;

  &:hover {
    background-color: #d0d7dd;
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

