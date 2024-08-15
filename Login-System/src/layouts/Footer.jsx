import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../components/style/Container_styled";
import { FooterStyled } from "../components/style/footer_styled";
import { Flex } from "../components/style/Flex_styled";
import { HL, Typography } from "../components/style/Typography_styled";
import { ColorIcon } from "../components/style/IcontButton_styled";
import { DateTime } from "luxon";
import * as feather from "feather-icons/dist/feather.min";
  
const Border = styled.div`
    padding: 5px;
    border-radius: 20px;}
`;

const FooterMenu = styled.div`
  width: 100%;
  display: flex;
  height:500px,
  justify-content: center; 
  color: ${({ theme }) => theme.colors.bodyContent}; 
  
  &> a {
    color: ${({ theme }) => theme.colors.font};
    font-size: ${({ theme }) => theme.fontSize.bodyTitleFontSize};
    margin-right: 2px;
    margin-left: 2px;
    padding: 0 5px; 
    &:hover {
      background:${({ theme }) => theme.colors.primaryHover} ; 
    }
  }

`;
const ALink = styled.a`
text-decoration: none;
`;
const Footer = () => {
  useEffect(() => { feather.replace() }, [])
  return (
    <>
      <Container border={"none"}>
        <FooterStyled color="font">
          <FooterMenu>
            <Flex row>
              <Flex padding="5px 0 0  0!important" md={12}>
                <Typography fontSize="bodySubTitleFontSize" fontWeight={"bold"} width={"100%"}>
                  Connect with us
                </Typography>
              </Flex>
              <Flex padding="0 !important" md={12}>
                <div style={{ marginTop: "4px", display: "flex", justifyContent: "center" }}>
                  <Border><a href="https://www.facebook.com/" target="_blank"><ColorIcon color="white" background="blue" data-feather="facebook" hover size={40} /></a></Border>
                  <Border><a href="https://www.twitter.com/" target="_blank"><ColorIcon color="white" background="#0dbbe0" data-feather="twitter" hover size={40} /></a></Border>
                  <Border><a href="https://www.instagram.com/" target="_blank"><ColorIcon color="red" hoverBack={"secendaryColor"} background="red" data-feather="instagram" hover size={40} /></a></Border>
                  <Border><a href="https://www.linkedin.com/" target="_blank"><ColorIcon color="white" background="#0073b1" data-feather="linkedin" hover size={40} /></a></Border>
                </div>
              </Flex>
              <Flex padding="0 0 5px 0 !important" md={12}>
                <Typography margin={"0 5px 0 0"} fontWeight={"bold"} fontSize="font">  © {DateTime.now().toFormat("yyyy")} My <HL>Profile</HL> || All Rights Reserved</Typography>
              </Flex>
            </Flex>
          </FooterMenu>
        </FooterStyled>
      </Container>
    </>
  );
};

export default Footer;
