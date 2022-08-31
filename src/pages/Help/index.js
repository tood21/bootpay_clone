import React from "react";
import styled from "styled-components";
import Infomation from "./Information";
import Search from "./Search";

const Help = () => {
  return (
    <Container>
      <Inner>
        <Search />
        <Infomation />
      </Inner>
    </Container>
  );
};

export default Help;

const Container = styled.div`
  padding: 130px 3% 200px;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
