import React from 'react'
import styled from 'styled-components';

import noticeIcon from 'assets/images/PaymentAgent/notice_icon.svg'
import ServiceFlow from './ServiceFlow';

const ContentSection = () => {
  return (
    <Container>
        <Notice>해당 서비스는 일부 PG에서만 제공 하는 기능입니다. 지원되는 PG사가 궁금하시면 문의주세요.</Notice>
        <Description>
            <strong>서비스</strong>
            <ul>
                <li>오픈마켓 가맹점이실 경우, 입점한 하위 가맹점에게 정산해야할 업무를 PG가 대행하여 지급하는 서비스입니다.</li>
                <li>오픈마켓 가맹점이 하위 판매자 정보와 지급데이터를 관리하고, PG는 지급대행 업무를 진행합니다.</li>
            </ul>
        </Description>
        <Description>
            <strong>서비스 특징</strong>
            <ul>
                <li>서비스 이용 가맹점은 전자금융업자 등록 및 운영에 따른 비용 부담이 해소됩니다.</li>
                <li>하위 사업자에 대한 정산을 간편하게 실행함으로써 업무 효율성이 증대됩니다.</li>
            </ul>
        </Description>
        <ServiceFlow />
        
    </Container>
  )
}

export default ContentSection;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 3% 200px;
    background: #F7F9FC;
`

const Notice = styled.p`
    font-size: 0.9375rem;
    line-height: 1.7333;
    color: #4529e5;
    padding: 4px 20px 8px 40px;
    background: #cafcfa;
    border-radius: 20px;
    position: relative;

    &:before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        background: url(${noticeIcon});
    }
`

const Description = styled.div`
    margin-top: 40px;
    width: 600px;

    strong {
        display: block;
        font-size: 1.25rem;
        line-height: 1.6;
        color: #555;
        font-weight: 700;
        margin-bottom: 20px;
    }

    ul {
        list-style: square;
        padding-left: 40px;

        li {
            font-size: 1.0625rem;
            line-height: 1.588;
            color: #6e7c91;
            margin-bottom: 14px;
        }
    }
`