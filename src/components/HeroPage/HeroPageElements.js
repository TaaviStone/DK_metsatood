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
  z-index: 2;

  @media screen and (max-width: 770px) {
    height: 800px;
    margin-top: -30vh;
    margin-bottom: 20vh;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 15vh;
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
  font-size: 60px;
  text-align: center;
  z-index: 2;
  position: relative;
  text-shadow: 3px 3px #28220b;

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
  text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: #000;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.2);

  &:hover {
    color: #fff !important;
    background: #decd87;
    transition: all 0.4s ease 0s;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background: #28220b;
  }

  @media screen and (max-width: 770px) {
    font-size: 16px;
    padding: 20px 55px;
  }
`;

export const ParralaxImg = styled.img`
  width: 100%;
  position: absolute;
  padding-top: 90vh;

  @media screen and (min-width: 1000px) and (min-height: 1300px) {
    padding-top: 60vh;
  }

  @media screen and (max-width: 770px) {
    width: 100vw;
    height: auto;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const ParralaxImgSun = styled.img`
  width: 100%;
  position: absolute;
  margin-top: 50px;

  @media screen and (max-width: 770px) {
  }

  @media screen and (max-width: 480px) {
    margin-top: -20vh;
  }
`;
