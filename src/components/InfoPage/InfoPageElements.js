import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ colStart }) =>
    colStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 770px) {
    grid-template-areas: ${({ colStart }) =>
      colStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  background: #28220b;
  width: 100%;
  height: 100%;
  grid-area: col1;
  padding: 40px;
`;

export const Column2 = styled.div`
  background: #decd87;
  width: 100%;
  height: 100%;
  padding: 40px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  width: 300px;
  padding-left: 30px;
  max-width: 540px;
  padding-top: 40px;
  padding-bottom: 60px;
  color: #fff;
`;

export const HeadingL = styled.h1`
  margin-bottom: 50px;
  padding: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #28220b;
  background-color: #decd87;
  border-radius: 4px;
  text-align: center;
`;

export const HeadingR = styled.h1`
  margin-bottom: 50px;
  padding: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #decd87;
  background-color: #28220b;
  border-radius: 4px;
  text-align: center;
`;

export const OfferTopL = styled.h2`
  border-top: 5px solid #decd87;
  border-bottom: 5px solid #decd87;
  padding: 20px 0 20px 0;
  line-height: 1.6;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`;

export const OfferMiddleL = styled.h2`
  border-bottom: 5px solid #decd87;
  padding: 20px 0 20px 0;
  line-height: 1.6;
  font-weight: 600;
`;

export const OfferTopR = styled.h2`
  border-top: 5px solid #28220b;
  border-bottom: 5px solid #28220b;
  padding: 20px 0 20px 0;
  line-height: 1.6;
  color: #000;
  font-weight: 600;
`;

export const OfferMiddleR = styled.h2`
  border-bottom: 5px solid #28220b;
  padding: 20px 0 20px 0;
  line-height: 1.6;
  color: #000;
`;
