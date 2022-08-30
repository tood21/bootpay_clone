import React from 'react'

import step1 from 'assets/images/PaymentAgent/step_1.png'
import step2 from 'assets/images/PaymentAgent/step_2.png'
import step3 from 'assets/images/PaymentAgent/step_3.png'
import step4 from 'assets/images/PaymentAgent/step_4.png'
import step5 from 'assets/images/PaymentAgent/step_5.png'
import step6 from 'assets/images/PaymentAgent/step_6.png'
import downArrow from 'assets/images/PaymentAgent/down_arrow.png'
import styled from 'styled-components'

const ServiceFlow = () => {

  return (
    <Container>
        <strong>서비스 흐름</strong>
        <Content>
            <div>
                <strong>가맹점</strong>
                <div>
                    <div>STEP 01</div>
                    <img src={step1} alt="step1" />
                    <p>서브 ID 등록 (계좌정보)</p>
                </div>
                <div>
                    <div>STEP 02</div>
                    <img src={step2} alt="step2" />
                    <p>자금현황 확인 (PG정산 or 현금입금)</p>
                </div>
                <div>
                    <div>STEP 03</div>
                    <img src={step3} alt="step3" />
                    <p>지급데이터 등록 (지급일, 지급금액)</p>
                </div>
            </div>
        </Content>
        <DownArrow>
             <img src={downArrow} alt='아래로' />
        </DownArrow>
        <Content>
            <div>
                <strong>가맹점</strong>
                <div>
                    <div>STEP 04</div>
                    <img src={step4} alt="step4" />
                    <p>자금현황확인 (PG정산 or 현금입금)</p>
                </div>
                <div>
                    <div>STEP 05</div>
                    <img src={step5} alt="step5" />
                    <p>지급 데이터 출금</p>
                </div>
                <div>
                    <div>STEP 06</div>
                    <img src={step6} alt="step6" />
                    <p>지급결과 업데이트</p>
                </div>
            </div>
        </Content>
    </Container>
  )
}

export default ServiceFlow

const Container = styled.div`
    color: #555;
    max-width: 600px;
    margin-top: 40px;
    font-weight: 700;
    > strong {
        font-size: 1.25rem;
        line-height: 1.6;
        font-weight: 700;
        margin-bottom: 50px;
        display: block;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: center;

 > div {
    max-width: 440px;
    padding: 15px;
    border: dotted 3px #2f374d;
    border-radius: 15px;

    strong {
        display: block;
        line-height: 1.625;
        margin-bottom: 15px;
     }

    > div {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        background: #ebebff;
        border-radius: 10px;
        margin-bottom: 10px;
        
        div {
            font-size: 0.8125rem;
            line-height: 1.615;
            width: 60px;
        }

        img {
            width: 60px;
            margin-right: 20px;
        }
    }
 }
 
`

const DownArrow = styled.div`
 text-align: center;
 img{
    width: 20px;
    margin: 15px auto;
 }
    
`