import React from 'react';
import styled from "styled-components";


const Step9 = () => {
    return (
        <Container>
            <p>부트페이 설치가 완료 되었습니다.</p>
            <p>통계를 무료로 이용하실 수 있습니다.</p>
            <div>
                <button>개발메뉴얼 바로가기</button>
                <button>관리자 체험하기</button>
            </div>
        </Container>
    );
};

export default Step9;

const Container = styled.div`
  border: solid 1px #d7dadd;
  padding: 30px 20px 30px 40px;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
  p {
    font-size: 2.125rem;
    line-height: 1.588;
    font-weight: 700;
    color: #2f374d;
    &:nth-child(2) {
      font-size: 1rem;
      line-height: 1.625;
      color: #555;
      margin: 5px 0 30px;
    }
  }
  
  button {
        font-size: 1.125rem;
        line-height: 1.44444;
        color: #fff;
        background-color: #4529e5;
        border-radius: 3px;
        padding: 12px 20px;
        min-width: 180px;
        margin-right: 10px;
      }
  `

