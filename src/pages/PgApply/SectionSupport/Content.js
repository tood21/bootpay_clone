import React from 'react';
import styled from "styled-components";


import icon from "assets/images/PgApply/section_support_icon.svg"

const Content = ({data}) => {
    const {titleSpan, title, text, list, descriptionUp,descriptionDown, img} = data

    return (
        <ContentContainer>
            <div>
                <p><span>{titleSpan}</span>{title}</p>
                <p>{text}</p>
                <Comission>
                    <ListContainer>
                        <ul>
                            {list.map((item, idx) => (
                                <li key={idx}>
                                    <span>{item.title}</span>
                                    <span>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </ListContainer>
                    <ImgContainer>
                        <img src={img} alt={data.title}/>
                    </ImgContainer>
                </Comission>
            </div>
            <Description>
                <p>{descriptionUp}</p>
                <p>{descriptionDown}</p>
            </Description>

        </ContentContainer>
    );
};

export default Content;



const ContentContainer = styled.div`
  width: 50%;
  padding: 0 20px 20px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
  > div{
    
    &:first-child{
      border: solid 1px #d7dadd;
      background-color: #fff;
      padding: 20px 40px;
      margin-bottom: 20px;
     
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
  width: 50%;
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

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  img {
    width: 80%
  }
`

const Description = styled.div`
  background-color: #cafcfa;
  padding: 4px 20px 8px 40px;
  border-radius: 20px;
  display: inline-block;
  position: relative;
  margin-left: 10px;

  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(${icon});
    left: 0;
    top: 0;
  }

    p {
      white-space: pre-wrap;
      font-size: 0.85rem;
      line-height: 1.73;
      color: #4529e5;
    }
  `