import React from 'react';
import styled from "styled-components";

import titleIcon from "assets/images/Home/section_analysis_icon.svg"
import service from "assets/images/Home/section_analysis_service.svg"
import adminView  from "assets/images/Home/section_analysis_admin.svg"
import serviceMobile from "assets/images/Home/section_analysis_service_mobile.svg"
import {useMediaQuery} from "react-responsive";

const Section_analysis = () => {
    const mobile = useMediaQuery({maxWidth: "900px"})
    return (
        <Section>
            <SectionInner>
                <SideContainer>
                    <img src={titleIcon} alt="로그분석아이콘"/>
                </SideContainer>
                <ContentContainer>
                    <h3>
                        PG 기반의
                        <p>무료 로그분석 서비스</p>
                    </h3>
                    <p>정확한 매출데이터를 기반으로 유입, 고객, 상품, 채널등의 데이터를 제공하며, 결제가 취소되더라도 불편한 과정없이 부트페이가 데이터를 추적하여 업데이트합니다.<br />
                        부트페이를 통해 결제창을 연동하고, 추가적으로 2줄을 코딩한다면 강력한 데이터분석 기능을 무료로 이용할 수 있습니다.</p>
                    <div>
                        {
                            mobile ? <img src={serviceMobile} alt="서비스 절차" /> :<img src={service} alt="서비스 절차" />
                        }
                        <img src={adminView} alt="관리자페이지뷰" />
                    </div>
                </ContentContainer>
            </SectionInner>
        </Section>
    );
};

export default Section_analysis;

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 160px 5% 210px;
`
const SectionInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
const SideContainer = styled.div`
  width: 200px;
  img {
    width: 80px;
    height: 80px;
  }
`
const ContentContainer = styled.div`
  > p {
    line-height: 2;
    color: #586981;
    margin-bottom: 80px;
  }
  h3 {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 30px;
    
    p {
      color: #4529e5;
    }
  }
  div {
    display: flex;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      img{
        width: 80%;
        &:nth-child(2) {
          width: 90%;
        }
      }
    }

  }
  img {
    width: 45%;
  }
  
  img + img {
    margin-left: 1rem;
  }
`