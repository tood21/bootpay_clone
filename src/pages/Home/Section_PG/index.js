import React from 'react';
import styled from "styled-components";

import nPay from "assets/images/Home/npay.png"
import kakaoPay from "assets/images/Home/kakao.png"
import payco from "assets/images/Home/payco.png"
import nice from "assets/images/Home/nice.png"
import payapp from "assets/images/Home/payapp.png"
import danal from "assets/images/Home/danal.png"
import kcp from "assets/images/Home/kcp.png"
import kgInicis from "assets/images/Home/inicis.png"
import tossPayment from "assets/images/Home/toss.png"
import payletter from "assets/images/Home/payletter.png"
import welcome from "assets/images/Home/welcome.png"
import tPay from "assets/images/Home/tpay.png"
import easyPay from "assets/images/Home/easypay.png"

const Section_PG = () => {
    const logo = [
        {
            id: "nPay",
            logo: nPay
        },
        {
            id: "kakaoPay",
            logo: kakaoPay
        },
        {
            id: "payco",
            logo: payco
        },
        {
            id: "nice",
            logo: nice
        },
        {
            id: "payapp",
            logo: payapp
        }, {
            id: "danal",
            logo: danal
        }
        ,
        {
            id: "kcp",
            logo: kcp
        },
        {
            id: "kgInicis",
            logo: kgInicis
        },
        {
            id: "tossPayment",
            logo: tossPayment
        }
        ,
        {
            id: "payletter",
            logo: payletter
        }
        ,
        {
            id: "welcome",
            logo: welcome
        }
        ,
        {
            id: "tPay",
            logo: tPay
        }
        ,
        {
            id: "easyPay",
            logo: easyPay
        }
    ]


    return (
        <Section>
            <SectionInner>
                <Title>부트페이가 지원하는 PG사</Title>
                <List>
                    {logo.map((item)=> (
                        <li key={item.id}>
                            <img src={item.logo} alt={item.id} />
                        </li>
                    ))}
                </List>
            </SectionInner>
        </Section>
    );
};

export default Section_PG;

const Section = styled.section`
  width: 100%;
  background-color: #f7f9fc;
  padding: 100px 3% 50px;
`
const SectionInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`
const Title = styled.h3`
  text-align: center;
  line-height: 1.5;
  color: #bac4d2;
  font-weight: 700;
  margin-bottom: 20px;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
   li {
     width: 20%;
     padding: 25px;
     text-align: center;
     
     @media all and (max-width: 768px) {
       width: 25%;
       padding: 15px;
     }
     
     @media all and (max-width: 500px) {
       width: 50%
     }
     
     img{
       height: 40px;
       width: 100px;
     }
   }
`