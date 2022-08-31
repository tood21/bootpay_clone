import React, { useState } from "react";
import styled from "styled-components";

import informationData from "./informationData.js";
import InformationList from "./InformationList.js";

const Infomation = () => {
  const [tabState, setTabState] = useState("일반");
  const [isActiveAccodion, setIsActiveAccodion] = useState("");

  const tabMenu = [
    {
      id: 1,
      title: "일반",
    },
    {
      id: 2,
      title: "PG가입",
    },
    {
      id: 3,
      title: "연동개발",
    },
  ];

  const onClickHandler = (menu) => {
    setTabState(menu.title);
  };

  const getClickAccodion = (data) => {
    setIsActiveAccodion(data.id);
  };

  return (
    <Container>
      <Tabbuttons>
        {tabMenu.map((menu) => (
          <Tabbutton
            isActive={tabState === menu.title}
            onClick={() => onClickHandler(menu)}
            key={menu.id}
          >
            {menu.title}
          </Tabbutton>
        ))}
      </Tabbuttons>

      {tabState === "일반" && (
        <InformationList
          isActiveAccodion={isActiveAccodion}
          list={informationData[0].information}
          getClickAccodion={getClickAccodion}
        />
      )}
      {tabState === "PG가입" && (
        <InformationList
          isActiveAccodion={isActiveAccodion}
          list={informationData[1].information}
          getClickAccodion={getClickAccodion}
        />
      )}
      {tabState === "연동개발" && (
        <InformationList
          isActiveAccodion={isActiveAccodion}
          list={informationData[2].information}
          getClickAccodion={getClickAccodion}
        />
      )}
    </Container>
  );
};

export default Infomation;

const Container = styled.div`
  min-height: 900px;
`;

const Tabbuttons = styled.div`
  border-bottom: 2px solid #2f374d;
`;

const Tabbutton = styled.button`
  font-size: ${(props) => (props.isActive ? "1.75rem" : "1.125rem")};
  line-height: ${(props) => (props.isActive ? "1.607" : "1.6111")};
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
  color: #555;
  padding: 10px 30px 15px 20px;
  outline: 0;
`;
