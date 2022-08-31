import React, { useState } from "react";
import styled from "styled-components";

import grid from "assets/images/PgApply/section_process_grid.svg";
import NewProcess from "./NewProcess";
import OldProcess from "./OldProcess";

const ProcessContainer = () => {
  const [tapFlag, setTapFlag] = useState("new");

  const tapMenu = [
    {
      id: 1,
      title: "신규 PG 가입자",
      value: "new",
    },
    {
      id: 2,
      title: "기존 PG 가입자",
      value: "old",
    },
  ];

  return (
    <Container>
      <TapMenu>
        {tapMenu.map((menu) => (
          <StyledButton
            active={menu.value === tapFlag}
            key={menu.id}
            onClick={() => setTapFlag(menu.value)}
          >
            {menu.title}
          </StyledButton>
        ))}
      </TapMenu>
      <Process>
        <ImgContainer>
          <img src={grid} alt="grid" />
        </ImgContainer>
        {tapFlag === "new" && <NewProcess />}
        {tapFlag === "old" && <OldProcess />}
      </Process>
    </Container>
  );
};

export default ProcessContainer;

const Container = styled.div`
  display: flex;
`;

const TapMenu = styled.div`
  width: 25%;
`;

const StyledButton = styled.button`
  display: block;
  font-size: 1.1875rem;
  line-height: 1.6;
  font-weight: 700;
  border-radius: 4px;
  padding: 8px 53px;
  margin-bottom: 10px;
  color: ${(props) => (props.active ? "#fff" : "#6999f9")};
  background-color: ${(props) => (props.active ? "#6999f9" : "#fff")};
  box-shadow: ${(props) =>
    props.active ? "1px 3px 2px rgb(100 100 100 / 30%)" : "none"};

  &:hover {
    background-color: ${(props) => (props.active ? "none" : "#f6f9fc")};
  }
`;

const Process = styled.div`
  width: 75%;
  position: relative;
`;

const ImgContainer = styled.div`
  height: 400px;
`;
