import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowRestore} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const OverviewDescription = ({data}) => {
    const {title, text, service,buttonValue} = data;

    return (
        <Description>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <p>{service}</p>
                <IconButton>
                    {buttonValue}
                    <FontAwesomeIcon icon={faWindowRestore}/>
                </IconButton>
            </div>
        </Description>
    );
};

export default OverviewDescription;

const Description = styled.div`
  white-space: pre-wrap;
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
  div{
    h3 {
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    p {
      line-height: 1.6;
      margin-bottom: 1.5rem;

      &:nth-child(3) {
        color: #4529e5;
        font-weight: 600;
        margin-bottom: 1.5rem;
      }
    }
  }
  
`

const IconButton = styled.button`
  padding: 8px 30px;
  background: #4529e5;
  color: #fff;
  font-size: 1.06rem;
  line-height: 1.6;
  border-radius: 3px;
  svg {
    margin-left: 10px;
  }
  &:hover {
    margin-top: -2px;
    margin-bottom: 2px;
    transition: all 0.3s;
    box-shadow: 0 5px 12px rgb(0 0 0 / 20%);
  }
`