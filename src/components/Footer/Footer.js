import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterContent,
  Creator,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterContent>&copy; D&amp;K Metsatööd 2021</FooterContent>
        <Creator>Created by Taavi Raudkivi</Creator>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
