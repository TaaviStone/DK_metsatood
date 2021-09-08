import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Kohustuslik"),
  email: yup.string().email().required("Kohustuslik"),
  text: yup
    .string()
    .min(10, "Teksti pikkus vähemalt 10 tähemärki")
    .required("Kohustuslik"),
});
