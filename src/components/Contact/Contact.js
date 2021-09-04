import React from "react";
import emailjs from "emailjs-com";
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
import { userSchema, ErrorMessage } from "../Validations/UserValidation";

const Contact = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      text: e.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);

    if (isValid) {
      emailjs
        .sendForm(
          "service_0l1vevq",
          "template_a79j1cc",
          e.target,
          "user_WoBjyvGzVBGu1frG8DZlO"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactHeadWrap>
        <OwnerName>Kevin Kuusik</OwnerName>
        <OwnerPhone>(+372) 5341 8200</OwnerPhone>
      </ContactHeadWrap>
      <ContactForm onSubmit={sendEmail}>
        <ContactHeader>Kirjuta meilile</ContactHeader>

        <ContactLabel>Nimi</ContactLabel>
        <ContactInput placeholder="Nimi" name="name" />

        <ContactLabel>Email</ContactLabel>
        <ContactInput placeholder="nimi@email.com" name="userEmail" />

        <ContactLabel>Sõnum</ContactLabel>
        <ContactTextarea placeholder="Sõnum" name="message"></ContactTextarea>

        <SubmitButton type="submit">SAADA SÕNUM</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
