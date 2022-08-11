import React from 'react';
import styled from "styled-components";

import {faWindowRestore} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import payTotal from "assets/images/Home/section_Payment_payTotal.svg"
import logoWindow from "assets/images/Home/section_Payment_window.svg"
import logoSecurity from "assets/images/Home/section_Payment_security.svg"
import securityIcon from "assets/images/Home/section_Payment_securityIcon.svg"
import securityMonitor from "assets/images/Home/section_Payment_securityMonitor.svg"

const Section_Payment = () => {
    const listItems = [
        {id: 1, title: "모든 통신구간 SSL암호화 적용"},
        {id: 2, title: "White IP 허용"},
        {id: 3, title: "Private Cloud 환경"},
        {id: 4, title: "대규모 트래픽 처리"},
        {id: 5, title: "실시간 트래픽 모니터링"},
        {id: 6, title: "즉각적인 노드 분산 처리"},
    ]
    return (
        <Section>
            <h3 className="sr-only">결제창, 보안</h3>
            <SectionInner>
                <ContentContainer>
                    <LogoImgContainter>
                        <img src={logoWindow} alt="결제창"/>
                    </LogoImgContainter>
                    <strong>통합 결제창 제공</strong>
                    <p>판매페이지에서 여러 결제수단을 지저분하게 나열하지 마시고,<br/>
                        단 하나의 구매하기 버튼을 제공하세요.</p>
                    <IconButton>
                        통합결제창 테스트
                        <FontAwesomeIcon icon={faWindowRestore}/>
                    </IconButton>
                    <ImgContainer>
                        <img src={payTotal} alt="결제선택하기 화면정보"/>
                    </ImgContainer>
                </ContentContainer>
                <ContentContainer>
                    <LogoImgContainter>
                        <img src={logoSecurity} alt="보안"/>
                    </LogoImgContainter>
                    <strong>안전한 보안</strong>
                    <SecurityListContainer>
                        <ul>
                            {
                                listItems.map((item) => (
                                    <li key={item.id}>{item.title}</li>
                                ))
                            }
                        </ul>
                        <SecurityRowContainer>
                            <img src={securityMonitor} alt="보안철저" />
                        </SecurityRowContainer>
                    </SecurityListContainer>

                </ContentContainer>
            </SectionInner>
        </Section>
    )
        ;
};

export default Section_Payment;

const Section = styled.section`
  width: 100%;
  background-color: #f7f9fc;
  margin-top: 150px;
  @media screen and (max-width: 900px) {
    margin-top: 30px;
  }
`
const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  padding: 120px 5% 0;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;

  }
  
`

const ContentContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
    max-width: 400px;
  }

  strong {
    color: #555;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.6;
  }

  > p {
    color: #8a92a5;
    line-height: 1.8;
    margin-bottom: 15px;
  }
`
const LogoImgContainter = styled.div`
  margin-bottom: 15px;

  img {
    width: 80px;
    height: 80px;
  }
`


const IconButton = styled.button`
  display: inline-block;
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  padding: 8px 30px;
  background: #4529e5;
  border-radius: 3px;

  &:hover {
    margin-top: -2px;
    margin-bottom: 2px;
    transition: all 0.3s;
    box-shadow: 0 5px 12px rgb(0 0 0 / 20%);
  }

  svg {
    margin-left: 10px;
  }
`
const ImgContainer = styled.div`
  padding-top: 35px;
  img {
    width: 80%;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }
`

const SecurityListContainer = styled.div`
  background: #fff;
  padding: 50px;
  max-width: 450px;
  margin-top: 40px;
  

  ul {
    li {
      font-size: 1.25rem;
      line-height: 1.6;
      color: #4529e5;
      font-weight: 700;
      position: relative;
      padding-left: 30px;
      margin-bottom: 44px;

      &::before {
        content: "";
        background: url(${securityIcon}) no-repeat center;
        position: absolute;
        width: 20px;
        height: 20px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`

const SecurityRowContainer = styled.div`
  text-align: right;
  img{
    width: 200px;
  }
`