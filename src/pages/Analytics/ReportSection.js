import React from 'react';
import styled from "styled-components";

import tablet from "assets/images/Analytics/3_tablet.png"
import Button from "components/Button";

const ReportSection = () => {
    return (
        <Container>
            <Inner>
                <Content>
                    <div>
                        <img src={tablet} alt="tablet" />
                    </div>
                    <div>
                        <strong><span>월/분기/연도별로 리포트</span>를 제공합니다.</strong>

                        <p>유입, 매출 등의 데이터를 종합 분석하여<br/>
                            <span>데이터 해석, 시장에서의 위치, 경쟁사 비교,<br/>
                            고객 타깃팅, 목표 데이터 설정</span>등의<br/>
                            내용을 담은 리포트를 제공하여<br/>
                            <strong>데이터 경영을 쉽게 할 수 있도록 돕습니다.</strong></p>

                        <Button>관리자 체험하기</Button>
                    </div>
                </Content>
            </Inner>
        </Container>
    );
};

export default ReportSection;

const Container = styled.section`
  padding: 120px 3% 150px;
  background-color: #F7F9FC;
`

const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Content = styled.div`
    display: flex;
  > div {
    
    &:nth-child(1) {
      width: 55%;
      img {
        width: 80%;
      }
    }
    
    &:nth-child(2) {
      width: 45%;
      
     > strong {
        display: block;
        font-size: 2.125rem;
        line-height: 1.588;
        color: #2f374d;
        font-weight: 300;
        margin-bottom: 36px;
        
        span {
          font-weight: 700;
        }
      }
      
      p {
        font-size: 1.125rem;
        line-height: 1.77777;
        color: #555;
        margin-bottom: 50px;
        
        span {
          color: #4529e5;
          font-weight: 600;
        }
        
        strong {
          font-weight: 700;
        }
      }
    }
    
  }
`