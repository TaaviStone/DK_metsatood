import React from "react";
import {
  ContactContainer,
  OwnerName,
  OwnerPhone,
  ContactForm,
  ContactHeader,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  ContactHeadWrap,
  SubmitButton,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactHeadWrap>
        <OwnerName>Kevin Kuusik</OwnerName>
        <OwnerPhone>(+372) 5341 8200</OwnerPhone>
      </ContactHeadWrap>
      <ContactForm>
        <ContactHeader>Kirjuta meilile</ContactHeader>

        <ContactLabel>Nimi</ContactLabel>
        <ContactInput placeholder="Nimi" />

        <ContactLabel>Email</ContactLabel>
        <ContactInput placeholder="nimi@email.com" />

        <ContactLabel>Sõnum</ContactLabel>
        <ContactTextarea placeholder="Sõnum"></ContactTextarea>

        <SubmitButton type="submit">SAADA SÕNUM</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
