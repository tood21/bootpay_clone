import React from 'react';
import styled from "styled-components";

const Button = ({children}) => {
    return (
        <StyledButton>{children}</StyledButton>
    );
};

export default Button;

const StyledButton = styled.a`
  display: inline-block;
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  font-size: 1.3rem;
  padding: 16px 30px;
  background: #4529e5;
  border-radius: 3px;
  &:hover {
    margin-top: -2px;
    margin-bottom: 2px;
    transition: all 0.3s;
    box-shadow: 0 5px 12px rgb(0 0 0 / 20%);
  }
`