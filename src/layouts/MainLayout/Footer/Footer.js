import React from 'react';
import styled from "styled-components";

import bootpay_logo_gray from 'assets/images/MainLayout/bootpay_gray.svg'

const Footer = () => {

    return (
        <Container>
            <Inner>
                <FooterTitle>
                    <h2>
                        <img src={bootpay_logo_gray} alt="부트페이"/>
                    </h2>
                </FooterTitle>
                <ContactContainer>
                    <AddressInfo>
                        <address>
                            <span>(주)부트페이 | </span>
                            <span>사업자 등록번호 618-87-00495 | </span>
                            <span>대표 정재훈</span>
                        </address>
                        <address>
                            <span>서울특별시 구로구 디지털로26길 61, 1801호 | </span>
                            <span>bootpay.co.kr@gmail.com</span>
                        </address>
                    </AddressInfo>
                    <Contact>
                        <strong>
                            CONTACT
                        </strong>
                        <address>
                            <p>TEL. 1599-4062</p>
                            <p>FAX. 02-6008-9760</p>
                        </address>
                    </Contact>
                    <Contact>
                        <strong>
                            LINKS
                        </strong>
                        <div>
                            <ul>
                                <li>
                                    <a>부트페이 관리자 이동</a>
                                </li>
                                <li>
                                    <a>부트페이 개발문서 이동</a>
                                </li>
                            </ul>
                        </div>
                    </Contact>
                </ContactContainer>
            </Inner>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 60px 3%;
  background-color: #f7f9fc;
`
const Inner = styled.div`
  max-width: 1000px;
  width: 100%;
`
const FooterTitle = styled.div`
  width: 100%;

  h2 {
    @media screen and (max-width: 900px) {
      text-align: center;
    }
    img {
      width: 100px;
      padding-bottom: 20px;
      
    }
  }
`

const ContactContainer = styled.div`
  font-size: 14px;
  color: #8a92a5;
  display: flex;
  line-height: 1.5;
  @media screen and (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;

  }
  strong {
    color: #8a92a5;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 5px;
    display: inline-block;
  }
`

const AddressInfo = styled.div`
  width: 50%;
  padding-top: 1.5rem;
  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`

const Contact = styled.div`
  width: 25%;
  @media screen and (max-width: 900px) {
    width: 50%;
    margin-top: 10px;
    text-align: center;
}
`
