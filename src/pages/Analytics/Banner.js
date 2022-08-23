import React from 'react';

import bannerImg from "assets/images/Analytics/bannerImg.png"
import styled from "styled-components";

const Banner = () => {
    return (
        <Container>
            <h3><span>PG 기반의 로그분석서비스</span><br/>
                부트페이 애널리틱스</h3>
            <Links>
                <button>관리자 체험하기</button>
                <button>부트페이 가입하기</button>
            </Links>
        </Container>
    );
};

export default Banner;

const Container = styled.section`
  background: url(${bannerImg}) center / cover;
  width: 100%;
  //height: 480px;
  padding: 200px 3% 100px;
  text-align: center;
   h3 {
     color: #fff;
     font-size: 3.125rem;
     line-height: 1.34;
     margin-bottom: 40px;
     
     span {
       font-weight: 100;
     }
   }
`
const Links = styled.div`
  button {
    border: solid 1px rgba(247,249,252,0.6);
    color: #fff;
    font-size: 1.0625rem;
    line-height: 1.588;
    padding: 16px 30px;
    border-radius: 3px;
    transition: all 0.5s;
    margin-right: 20px;
    
    &:nth-child(1) {
      &:hover {
        background-color: #4529e5;
        border-color: #4529e5;
        
      }
    }

    &:nth-child(2) {
      &:hover {
        background-color: #fff;
        border-color: #fff;
        color: #4529e5;
      }
    }
  }
`
