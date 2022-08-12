import React from 'react';
import styled from "styled-components";

import OverviewDescription from "./OverviewDescription";


const Overview_section = ({data}) => {
    return (
        <Section bgColor={data.bgColor}>
            <SectionInner layout={data.descriptionLeft}>
                <OverviewDescription data={data} />
                <ImgContainer>
                    <img src={data.img} alt={data.title}/>
                </ImgContainer>
            </SectionInner>
        </Section>
    );
};

export default Overview_section;

const Section = styled.section`
  padding: 120px 5% 50px 12%;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 900px) {
    padding: 120px 3% 50px;

  }
`
const SectionInner = styled.div`
  max-width: 1280px;
  padding: 0 20px;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  
  margin: 0 auto;
  align-items: center;
  flex-direction: ${props => props.layout || "row-reverse"};
  > div {
    width: 53%;
    &:nth-child(2) {
      width: 47%;
    }
  }
  @media screen and (max-width: 900px) {
    justify-content: center;
    padding: 0 10px;
    > div{
      width: 100%;
      &:nth-child(2) {
        width: 100%;
      }
    }
  }
`



const ImgContainer = styled.div`
  
  img {
    max-width: 400px;
    width: 100%;
  }
  
  @media screen and (max-width: 900px) {
    text-align: center;
    margin-top: 40px;
    img {
      min-width: 300px;

    }
  }
`

