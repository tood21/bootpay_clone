import React from 'react';
import styled from "styled-components";

import newProcess from "assets/images/PgApply/new_process.svg";


const NewProcess = () => {
    return (
        <ContentBox>
            <div>
                <img src={newProcess} alt="신규 가입 절차"/>
            </div>
            <ul>
                <li>
                    <strong>PG 가입하기</strong>
                    <p>PG 가입하기를 진행하시면<br/>
                        회원가입까지 동시에 완료됩니다.</p>
                </li>
                <li>
                    <strong>서류 심사 진행</strong>
                    <p>계약 담당자와 상담 후<br/>
                        계약서 및 구비서류를 제출합니다.</p>
                </li>
                <li>
                    <strong>결제 연동하기</strong>
                    <p>가이드에 따라 결제 연동을<br/>
                        진행합니다.테스트모드를 이용하면<br/>
                        PG가입 이전에도 개발이 가능합니다.</p>
                </li>
                <li>
                    <strong>PG 가입완료</strong>
                    <p>PG 심사가 완료되면 연동개발을<br/>
                        마무리합니다.부트페이가 제공하는<br/>
                        무료 서비스를 이용하시면 됩니다.</p>
                </li>

            </ul>
        </ContentBox>
    );
};

export default NewProcess;

const ContentBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  div {
    img {
      width: 83%;
      margin-left: 8.5%;
      margin-top: 80px;
      margin-bottom: 70px;
    }
  }
  ul {
    display: flex;
    li {
      width: 25%;
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