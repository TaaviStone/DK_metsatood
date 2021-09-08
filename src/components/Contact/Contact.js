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
  ErrorMessage,
} from "./ContactElements";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userSchema } from "../Validations/UserValidation";

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
      refreshPage();
    } else {
      alert("Kontrolli sõnumi saatmise");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  function refreshPage() {
    alert("Sõnum on saadetud");
    setTimeout(
      function () {
        window.location.reload({ render: true });
      }.bind(this),
      1000
    );
  }

  return (
    <ContactContainer id="contact">
      <ContactHeadWrap>
        <OwnerName>Kevin Kuusik</OwnerName>
        <OwnerPhone>(+372) 5341 8200</OwnerPhone>
      </ContactHeadWrap>
      <ContactForm onSubmit={sendEmail}>
        <ContactHeader>Kirjuta meilile</ContactHeader>

        <ContactLabel>Nimi</ContactLabel>
        <ContactInput type="text" placeholder="Nimi" name="name" />
        <>{errors.name?.message}</>
        <ContactLabel>Email</ContactLabel>
        <ContactInput
          type="text"
          placeholder="nimi@email.com"
          name="userEmail"
          ref={register("userEmail")}
        />
        {errors.email?.message}
        <ContactLabel>Sõnum</ContactLabel>
        <ContactTextarea
          type="text"
          placeholder="Sõnum"
          name="message"
          ref={React.createRef(register("message"))}
        ></ContactTextarea>
        {errors.text?.message}
        <SubmitButton type="submit">SAADA SÕNUM</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
