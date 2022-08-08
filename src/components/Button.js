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
`