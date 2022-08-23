import React from 'react';
import styled from "styled-components";
import contentsData from "./contentData";


const Contents = () => {


    return (
        <Container>
            <h3 className="sr-only">로그분석 서비스</h3>
            <Inner>
                {contentsData.map((data) => (
                    <Content key={data.id}>
                        <div>
                            <strong>{data.title}</strong>
                            <p>{data.description}</p>
                            <p>{data.subText}</p>
                        </div>
                        <div>
                            <img src={data.imgUrl} alt={data.title} />
                        </div>
                    </Content>
                ))}
            </Inner>
        </Container>
    );
};

export default Contents;

const Container = styled.section`
  padding: 120px 3% 50px;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  > div {
    width: 50%;
    padding: 20px;
    
    &:nth-child(1) {
     
      strong {
        display: block;
        font-size: 2.125rem;
        line-height: 1.588;
        color: #2f374d;
        font-weight: 700;
        margin-bottom: 10px;
      }
      
      p {
        line-height: 1.875;
        white-space: pre-wrap;
        &:nth-child(2) {
          color: #586981;
          margin-bottom: 10px;
        }

        &:nth-child(3) {
          color: #4529e5;
          font-weight: 600;
        }
      }
    }
    
    &:nth-child(2) {
      margin-bottom: 120px;
      img {
        width: 100%;
      }
    }
  }
`