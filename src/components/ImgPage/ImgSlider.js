import React, { useState } from "react";
import { SliderData } from "./SliderData";
import {
  CarouselContainer,
  CarouselWrapper,
  Carousel,
  FaArrowLeft,
  FaArrowRight,
  Images,
  Slide,
  SlideActive,
  Header,
  BottomImage,
} from "./ImgSliderElements";
import valley1 from "../../images/valley1.png";

const ImgSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <CarouselContainer id="jobs-pics">
      <Header>TEHTUD TÖÖD</Header>
      <CarouselWrapper>
        <Carousel>
          <FaArrowLeft onClick={prevSlide} />
          <FaArrowRight onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? <SlideActive /> : <Slide />}
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
      <BottomImage src={valley1} />
    </CarouselContainer>
  );
};

export default ImgSlider;
