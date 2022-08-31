import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, content, active }) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = (e) => {
    // e.stopPropagation();
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsCollapse(!isCollapse);
  };

  useEffect(() => {
    if (!active) {
      parentRef.current.style.height = "0";
      setIsCollapse(false);
    }
  }, [active]);

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonIcon = parentRefHeight === "0px" ? faAngleDown : faAngleUp;

  return (
    <Container>
      <Header isCollapse={isCollapse} onClick={handleButtonClick}>
        <p>{title}</p>
        <FontAwesomeIcon icon={buttonIcon} />
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents
          ref={childRef}
          dangerouslySetInnerHTML={{ __html: content }}
        ></Contents>
      </ContentsWrapper>
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  padding: 22px 20px;
  border-bottom: solid 1px #ced5e0;

  p {
    font-size: 1.1875rem;
    line-height: 1.6;
    color: #2f374d;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: ${(props) => (props.isCollapse ? "700" : "400")};
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
  > div > p {
    font-size: 0.9375rem;
  }
  > div > ul {
    list-style-type: disc;
    padding-left: 40px;
    li {
      font-size: 0.9375rem;
      font-weight: 400;
      color: #2f374d;
    }
  }
`;

const Contents = styled.div`
  padding: 30px 10px 20px 22px;
`;
