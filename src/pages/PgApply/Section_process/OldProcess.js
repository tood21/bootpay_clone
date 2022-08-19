import React from 'react';
import styled from "styled-components";

import oldProcess from "assets/images/PgApply/old_process.svg"

const OldProcess = () => {
    return (
        <ContentBox>
            <div>
                <img src={oldProcess} alt="기존 가입 절차"/>
            </div>
            <ul>
                <li>
                    <strong>결제 연동하기</strong>
                    <p>가이드에 따라 결제 연동을<br/>
                        진행합니다.</p>
                </li>
                <li>
                    <strong>PG 재가맹</strong>
                    <p>부트페이 연동 후<br/>
                        한달 이내에 PG 재가맹을 진행합니다.</p>
                </li>
                <li>
                    <strong>부트페이 무료로 이용</strong>
                    <p>부트페이가 제공하는 서비스를<br/>
                        무료로 이용할 수 있습니다.
                        </p>
                </li>
            </ul>
        </ContentBox>
    );
};

export default OldProcess;


const ContentBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  div {
    img {
      width: 74%;
      margin-left: 13%;
      margin-top: 70px;
      margin-bottom: 60px;
    }
  }
  ul {
    display: flex;
    li {
      width: 33.33333333333%;
      text-align: center;
      padding-top: 20px;


      strong {
        font-size: 1.25rem;
        line-height: 1.6;
        color: #2f374d;
        font-weight: 700;
      }
      
      p {
        padding-top: 20px;
        font-size: 0.875rem;
        line-height: 1.6;
        color: #8a92a5;
      }
    }
  }
`