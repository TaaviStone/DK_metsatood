import React, { useState, useEffect } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  ParralaxImg,
  ParralaxImgSun,
  ButtonContact,
} from "./HeroPageElements";
import valley1a from "../../images/valley1a.png";
import valley2 from "../../images/valley2.png";
import valley3 from "../../images/valley3.png";
import valley4 from "../../images/valley4.png";
import valley5 from "../../images/valley5.png";
import mountain from "../../images/mountain.png";
import sun from "../../images/sun.png";
import birds from "../../images/birds.png";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handeScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handeScroll);
    return () => window.removeEventListener("scroll", handeScroll);
  }, []);

  return (
    <HeroContainer id="home">
      <ParralaxImgSun src={sun} />
      <ParralaxImgSun src={birds} />
      <ParralaxImg
        src={mountain}
        style={{ transform: "translateY(${offsetY * 0.5}px })" }}
      />
      <ParralaxImg
        src={valley1a}
        style={{ transform: "translateY(${offsetY * 0.1}px })" }}
      />
      <ParralaxImg
        src={valley2}
        style={{ transform: "translateY(${offsetY * 0.2}px })" }}
      />
      <ParralaxImg
        src={valley3}
        style={{ transform: "translateY(${offsetY * 0.9}px })" }}
      />
      <ParralaxImg
        src={valley4}
        style={{ transform: "translateY(${offsetY * 0.7}px })" }}
      />
      <ParralaxImg
        src={valley5}
        style={{ transform: "translateY(${offsetY * 2}px })" }}
      />
      <HeroContent>
        <HeroH1>D&amp;K METSATÖÖD</HeroH1>
        <HeroBtnWrapper>
          <ButtonContact
            to="contact"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-70}
          >
            VÕTA ÜHENDUST
          </ButtonContact>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
