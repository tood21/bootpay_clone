import React from 'react'

import listData from "./listData";
import styled from "styled-components";






const ListContainer = () => {
    return (
            <Container>
                {
                    listData.map((list) => (
                        <CardContainer key={list.id}>

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
  padding: 20px;
  > div {
    text-align: center;
    margin-bottom: 10px;
    img {
      width: 138px;
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