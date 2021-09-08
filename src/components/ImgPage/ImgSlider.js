import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { SliderDataMachines } from "./SliderDataMachines";
import {
  CarouselContainer,
  CarouselWrapper,
  Carousel,
  FaArrowLeft,
  FaArrowRight,
  Images,
  Header,
  BottomImage,
} from "./ImgSliderElements";
import valley1 from "../../images/valley1.png";

const ImgSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [current1, setCurrent1] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide1 = () => {
    setCurrent1(current1 === length - 1 ? 0 : current1 + 1);
  };

  const prevSlide1 = () => {
    setCurrent1(current1 === 0 ? length - 1 : current1 - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section>
      <CarouselContainer id="jobs-pics">
        <Header>TEHTUD TÖÖD</Header>
        <CarouselWrapper>
          <Carousel>
            <FaArrowLeft onClick={prevSlide} />
            <FaArrowRight onClick={nextSlide} />
            {SliderData.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide-active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <Images src={slide.image} alt="metsatood" />
                  )}
                </div>
              );
            })}
          </Carousel>
        </CarouselWrapper>
        <Header>MASINAPARK</Header>
        <CarouselWrapper>
          <Carousel>
            <FaArrowLeft onClick={prevSlide1} />
            <FaArrowRight onClick={nextSlide1} />
            {SliderDataMachines.map((slide, index) => {
              return (
                <div
                  className={index === current1 ? "slide-active" : "slide"}
                  key={index}
                >
                  {index === current1 && (
                    <Images src={slide.image} alt="metsatood" />
                  )}
                </div>
              );
            })}
          </Carousel>
        </CarouselWrapper>
        <BottomImage src={valley1} />
      </CarouselContainer>
    </section>
  );
};

export default ImgSlider;
