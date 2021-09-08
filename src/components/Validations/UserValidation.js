import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup.string().email("Email ei ole õige").required("Kohustuslik väli"),
  name: yup.string().required("Kohustuslik väli"),
  text: yup
    .string()
    .min(10, "Teksti pikkus vähemalt 10 tähemärki")
    .required("Kohustuslik väli"),
});
