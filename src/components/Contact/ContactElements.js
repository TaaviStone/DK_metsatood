import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #c9ad34;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  z-index: 1;
`;

export const ContactHeadWrap = styled.div`
  padding-top: 100px;
`;

export const OwnerName = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: #28220b;

  @media screen and (max-width: 770px) {
    font-size: 50px;
  }
`;

export const OwnerPhone = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: #28220b;
  padding-top: 15px;
  @media screen and (max-width: 770px) {
    font-size: 30px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  margin-top: 150px;

  @media screen and (max-width: 770px) {
    width: 80vw;
  }
`;

export const ContactHeader = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;

  @media screen and (max-width: 770px) {
    font-size: 30px;
  }
`;

export const ContactLabel = styled.label`
  padding-bottom: 10px;
  color: #28220b;
`;

export const ContactInput = styled.input`
  padding: 20px;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 20px;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
`;

export const ContactTextarea = styled.textarea`
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137);
  margin-bottom: 20px;
  border: none;
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;

  height: 150px;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
  padding: 20px;
  border: none;
  background-color: rgb(2, 2, 110);
  font-weight: 400;
  font-size: 20px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;
`;

export const ErrorMessage = styled.p``;
