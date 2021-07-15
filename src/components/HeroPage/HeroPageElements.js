import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HeroContainer = styled.div`
  background: #7d6d23;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  margin-top: -80px;
  margin-bottom: 70vh;

  @media screen and (max-width: 770px) {
    overflow: hidden;
    margin-bottom: 70vh;
    height: 800px;
    margin-top: -30vh;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 770px) {
    margin-top: 10vh;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-align: center;

  @media screen and (max-width: 770px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContact = styled(LinkS)`
  padding: 25px 60px;
  border: none;
  background-color: #fff;
  font-weight: 550;
  font-size: 20px;
  border-radius: 20px;
  color: #000;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(255, 255, 255, 0.2);
`;

export const ParralaxImg = styled.img`
  width: 100%;
  position: absolute;
  padding-top: 90vh;

  @media screen and (max-width: 770px) {
    width: 150vw;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const ParralaxImgSun = styled.img`
  width: 100%;
  position: absolute;
  margin-top: 15vh;

  @media screen and (max-width: 770px) {
    margin-top: -10vh;
  }
`;
