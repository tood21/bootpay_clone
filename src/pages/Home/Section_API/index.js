import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import Button from "components/Button";
import conIcon from "assets/images/Home/section_API_comIcon.svg"
import codes from "./apiCode";
import Section_APIList from "./Section_APIList";
import CodeBlock from "./CodeBlock";

import {faGlobe, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {faApple, faAndroid} from "@fortawesome/free-brands-svg-icons";


const Section_API = () => {
    const [flag, setFlag] = useState(1);
    const [language, changeLanguage] = useState("js");
    const [code, setCode] = useState(1);
    const [lineNumbers, toggleLineNumbers] = useState(true);


    const menus = [
        {id: 1, title: "Web", icon: faGlobe},
        {id: 2, title: "Android", icon: faAndroid},
        {id: 3, title: "iOS", icon: faApple},
        {id: 4, title: "Flutter", icon: faPaperPlane}
    ]

    const onClickHandler = (item) => {
        setFlag(item)
    }

    useEffect(() => {
        setCode(codes[flag - 1])
    }, [flag])

    return (
        <Section>
            <h3 className="sr-only">개발자를 위한 API</h3>
            <SectionInner>
                <SectionSide>
                    <img src={conIcon} alt="아이콘"/>
                </SectionSide>
                <SectionContainer>
                    <SectionHeader>
                        <strong>개발자를 위한 API</strong>
                        <p>하루면 되는 결제연동</p>
                        <Button>개발매뉴얼 바로가기</Button>
                    </SectionHeader>
                    <SectionMain>
                        <CodeContainer>
                            <CodeBlock language={language} code={code} lineNunbers={lineNumbers} />
                        </CodeContainer>
                        <Section_APIList menus={menus} onClickHandler={onClickHandler} flag={flag} />
                    </SectionMain>
                </SectionContainer>
            </SectionInner>
        </Section>
    );
};

export default Section_API;

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  @media screen and (max-width: 900px) {
    padding: 3%;
  }
`

const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 900px) {
    display: block;
  }
`


const SectionSide = styled.div`
  width: 200px;
  img{
    width: 80px;
    height: 80px;
  }
`
const SectionContainer = styled.div`
  width: 100%;
`

const SectionHeader = styled.div`
  strong {
    font-size: 1.75rem;
    line-height: 1.6;
    color: #555;
    font-weight: 700;
  }

  p {
    color: #4529e5;
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 1.875rem;
  }
`
const SectionMain = styled.div`
  display: flex;
  margin-top: 50px;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

const CodeContainer = styled.div`
  width: 1000px;
  max-height: 500px;
  overflow: scroll;
  margin-right: 10%;
  @media screen and (max-width: 900px) {
    width: 100%;


  }
`

