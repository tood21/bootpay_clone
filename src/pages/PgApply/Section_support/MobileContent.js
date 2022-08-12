import React from 'react';
import styled from "styled-components";



const MobileContent = ({data}) => {
    const {titleSpan, title, text, list, descriptionUp,descriptionDown} = data

    return (
        <ContentContainer>
            <div>
                <p><span>{titleSpan}</span>{title}</p>
                <p>{text}</p>
                <Comission>
                    <ListContainer>
                        <ul>
                            {list.map((item) => (
                                <li key={item.id}>
                                    <span>{item.title}</span>
                                    <span>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </ListContainer>
                </Comission>
                <Description>
                    <p>* {descriptionUp}</p>
                    <p>* {descriptionDown}</p>
                </Description>
            </div>
        </ContentContainer>
    );
};

export default MobileContent;



const ContentContainer = styled.div`
  width: 100%;
  padding: 0 20px 20px;
  
  > div{
    
    &:first-child{
      border: solid 1px #d7dadd;
      background-color: #fff;
      padding: 20px 40px;
      margin-bottom: 20px;
      @media screen and (max-width: 1100px) {
        padding: 20px;
      }

      > p {
        &:first-child {
          font-size: 2.06rem;
          line-height: 1.6;
          color: #2f374d;
          font-weight: 700;
          span {
            font-weight: 600;
            color: #4529e5;
          }
        }
        &:nth-child(2) {
          color: #6e7c91;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }
      }
    }
   
  }
  
`

const Comission = styled.div`
    display: flex;
`


const ListContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  ul {
    background-color: #f7f9fc;
    padding: 7px 20px;
  
    
    li {
      display: flex;
      justify-content: space-between;
      span {
        padding: 7px 0;
        color: #586981;
        line-height: 1.6;
        &:nth-child(2) {
          color: #4529e5;
        }
      }
    }
  }
`



const Description = styled.div`
  p {
    font-size: 0.9375rem;
    line-height: 1.33;
    color: #8a92a5;
  }
  `