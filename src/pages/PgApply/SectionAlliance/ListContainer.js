import React from 'react'

import listData from "./listData";
import styled from "styled-components";

import question from "assets/images/PgApply/Section_alliance/question.svg"




const ListContainer = () => {
    return (
            <Container>
                {
                    listData.map((list) => (
                        <CardContainer key={list.id}>
                            {
                                list.title &&
                                <Card>
                                    <div><img  src={list.url}/></div>
                                    <CommissionList>
                                        {
                                            list.fee.map((item) => (
                                                <li key={item.kind}>
                                                    <p>{item.kind}</p>
                                                    <p>{item.value}</p>
                                                </li>
                                            ))
                                        }
                                    </CommissionList>
                                    <SubmitButton>가입 신청하기</SubmitButton>
                                </Card>
                            }

                            {
                                !list.title &&
                                <Card>
                                    <CardTitle>
                                        <p>어떤 PG사를 이용해야 할지 모르겠다면</p>
                                        <p>나에게 <span>알맞은 PG사</span>를<br/>추천받으세요</p>
                                    </CardTitle>
                                    <CardBody><img src={question} alt="물음표" /></CardBody>
                                    <SubmitButton>가입 신청하기</SubmitButton>
                                </Card>
                            }

                        </CardContainer>
                    ))
                }
            </Container>
    );
};

export default ListContainer;



const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const CardContainer = styled.div`
  width: 25%;
  margin-top: 30px;
  padding: 0 15px;
`

const Card = styled.li`
  background-color: #fff;
  box-shadow: 1px 1px 10px rgb(170 170 170 / 20%);
  padding: 16px 20px;
  height: 338px;
  > div {
    &:nth-child(1) {
      text-align: center;
      margin-bottom: 10px;
      img {
        width: 138px;
      }
    }
  }
`

const CommissionList = styled.ul`
  margin-bottom: 15px;
  
  li {
    padding: 6px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(odd) {
      background-color: #f7f9fc;
    }
    
    p {
      font-size: 0.75rem;
      line-height: 1.6;
      &:nth-child(1) {
        color: #6e7c91;
      }
      &:nth-child(2) {
        font-weight: 700;
      }
    }
  }
`
const SubmitButton = styled.button`
  font-family: inherit;
  color: #fff;
  font-weight: 700;
  border-radius: 3px;
  background: #71d89c;
  width: 100%;
  padding: 15px 0;
  font-size: 0.8125rem;
  line-height: 1.5;
`

const CardTitle = styled.div`
  p {
    color: #2f374d;
    text-align: left;
    &:nth-child(1) {
      font-size: 0.75rem;
      line-height: 1.6;
      padding-top: 15px;
    }
    
    &:nth-child(2) {
      font-size: 1.375rem;
      line-height: 1.3;
      font-weight: 700;
      padding-bottom: 10px;
      span {
        color: #71d89c;
      }
    }
  }
`
const CardBody = styled.div`
  text-align: center;
    img {
      width: 100px;
      height: 95px;
      margin-bottom: 40px;
    }

    
`