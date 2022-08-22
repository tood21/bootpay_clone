import React from 'react';
import styled from "styled-components";


const Step8 = () => {
    return (
        <Container>
            <div>
                <LeftColumn>
                    <div>
                        <p>STEP 8</p>
                        <p>통계 연동</p>
                    </div>
                </LeftColumn>
                <RightColumn>
                    <div>
                        <p>
                            결제창에서 유입, 매출 데이터를 수집되지만, 회원, 상품 정보는 추가적으로 보내주셔야 합니다.
                        </p>
                    </div>
                </RightColumn>
            </div>

            <div>
                <button>통계 연동 보러가기</button>
            </div>
        </Container>
    );
};

export default Step8;

const Container = styled.div`
  border: solid 1px #d7dadd;
  border-radius: 3px;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  > div {
    display: flex;
    &:nth-child(1) {
      padding: 30px 20px 30px 30px;
    }
    
    &:nth-child(2) {
      justify-content: center;
      align-items: center;
      
      > button {
        font-size: 1.125rem;
        line-height: 1.44444;
        color: #fff;
        background-color: #4529e5;
        border-radius: 3px;
        padding: 12px 20px;
        margin-bottom: 40px;
      }
    }
  }
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


