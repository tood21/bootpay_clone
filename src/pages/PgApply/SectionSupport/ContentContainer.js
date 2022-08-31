import React from 'react';
import styled from "styled-components";

import Content from "./Content";
import contentData from "./contentData";
import {useMediaQuery} from "react-responsive";
import MobileContent from "./MobileContent";

const ContentContainer = () => {
    const mobile = useMediaQuery({maxWidth: "1100px"})


    return (
        <Container>
            {
                mobile ?  (
                    contentData.map((data) => (
                        <MobileContent data={data} key={data.id} />
                    ))
                ): (
                    contentData.map((data) => (
                        <Content data={data} key={data.id} />
                    ))
                )
            }

        </Container>
    );
};

export default ContentContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
flex-wrap: wrap;
`