import React from 'react';
import styled from "styled-components";

const InfoFooter = () => {
    return (
        <Containner>
            <Title>
                <p>
                    <span>보증보험</span>에<br/>
                    대하여
                </p>
            </Title>
            <Description>
                <p>보증보험은 판매자의 물품 미지급, 채무 불이행, 부도 등으로부터 소비자를 보호하기 위한 보험입니다.</p>
                <p>공동구매, 비실물, 콘텐츠, 기간제 서비스 등의 사업형태에 따라 PG 가입시 보증보험이 요구될 수 있습니다.</p>
            </Description>
        </Containner>
    );
};

export default InfoFooter;

const Containner = styled.div`
    display: flex;
    padding: 30px 30px 45px;
    border: solid 1px #d7dadd;
    border-radius: 3px;
`
const Title = styled.div`
  font-size: 1.625rem;
  line-height: 1.307;
  color: #2f374d;
  font-weight: 700;
  width: 25%;
  span {
      color: #4529e5;
      font-weight: 600;
    } 
`

const Description = styled.div`
    width: 75%;
    font-size: 0.9375rem;
    line-height: 1.4;
    color: #586981;
`