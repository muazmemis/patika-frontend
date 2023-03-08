import { object, string, number, date, ref } from "yup";

const validations = object({
  email: string().email().required(),
  password: string().min(5).required(),
  passwordConfirm: string()
    .oneOf([ref("password")])
    .required(),
  //   name: string().required(),
  //   age: number().required().positive().integer(),
  //   website: string().url().nullable(),
  //   createdOn: date().default(() => new Date()),
});

export default validations;
