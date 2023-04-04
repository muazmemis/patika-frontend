import { number, object, string } from "yup";

const validations = object({
  title: string().required("Required!"),
  description: string().min(5, "Should be min length 5 char").required(),
  price: number()
    .min(50, "Should be min value 50")
    .max(100000, "Should be max value 100000")
    .typeError("Should be number")
    .required(),
});

export default validations;
