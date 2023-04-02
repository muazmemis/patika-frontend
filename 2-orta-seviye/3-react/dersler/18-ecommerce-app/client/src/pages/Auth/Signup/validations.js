import { object, string, ref } from "yup";

const validations = object({
  email: string().email("Should be valid email...").required("Required!"),
  password: string().min(5, "Should be min length 5 char").required(),
  passwordConfirm: string()
    .oneOf([ref("password"), "Should be equal to password"])
    .required(),
});

export default validations;
