import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #d3bc5f;

  @media screen and (max-width: 770px) {
    margin-top: -1px;
  }
`;

export const Header = styled.h1`
  color: #fff;
  font-size: 60px;
  text-shadow: 3px 3px rgba(0, 0, 0, 0.6);
  padding-top: 150px;
  text-align: center;
  padding-bottom: 30px;

  @media screen and (max-width: 770px) {
    padding-top: 100px;
    padding-bottom: 0px;
    font-size: 40px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  margin-top: -100px;

  @media screen and (max-width: 770px) {
    margin-top: -180px;
    padding-bottom: -100px;
  }
`;

export const Carousel = styled.section`
  position: relative;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Images = styled.img`
  width: 50vw;
  height: 50vh;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 770px) {
    width: 90vw;
    height: auto;
  }
`;

export const FaArrowRight = styled(FaAngleRight)`
  position: absolute;
  top: 50%;
  right: -80px;
  font-size: 3rem;
  color: #28220b;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 770px) {
    top: 20%;
    right: -10px;
    background-color: rgba(255, 255, 255, 0.7);
    font-size: 2.3rem;
  }
`;

export const FaArrowLeft = styled(FaAngleLeft)`
  position: absolute;
  top: 50%;
  left: -80px;
  font-size: 3rem;
  color: #28220b;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 770px) {
    top: 20%;
    left: -10px;
    background-color: rgba(255, 255, 255, 0.7);
    font-size: 2.3rem;
  }
`;

export const Slide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;
`;

export const SlideActive = styled.div`
  opacity: 1;
  transition-duration: 1s ease;
  transform: scale(1.08);
`;

export const BottomImage = styled.img`
  width: 100%;
  margin-bottom: -10px;
`;
