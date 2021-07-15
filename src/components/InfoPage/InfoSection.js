import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  HeadingL,
  HeadingR,
  OfferTopL,
  OfferMiddleL,
  OfferTopR,
  OfferMiddleR,
} from "./InfoPageElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <HeadingL>Pakume</HeadingL>
                <OfferTopL>Metsaraie ja väljavedu</OfferTopL>
                <OfferMiddleL>
                  Ekskavaatoriga lankide ja põllumaade võsast puhastamine
                </OfferMiddleL>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <HeadingR>Ostame</HeadingR>
                <OfferTopR>Kasvava metsa raieõigusi</OfferTopR>
                <OfferMiddleR>Kasvavat võsa ja raiejäätmeid</OfferMiddleR>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
