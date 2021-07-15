import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #d3bc5f;
`;

export const Header = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-shadow: 2px 2px #000;
  padding-top: 150px;
  text-align: center;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  margin-top: -100px;
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
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 460px) {
    width: 170px;
    height: 170px;
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
