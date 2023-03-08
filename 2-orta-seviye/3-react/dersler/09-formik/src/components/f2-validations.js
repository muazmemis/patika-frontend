import { object, string, number, date, ref } from "yup";

const validations = object({
  email: string().email("Geçerli bir email giri").required("Zorunlu alan"),
  password: string()
    .min(5, "Parolanız en az 5 karakter olmalıdır.")
    .required("Zorunlu alan"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Parolalar eşleşmiyor")
    .required("Zorunlu alan"),
  //   name: string().required(),
  //   age: number().required().positive().integer(),
  //   website: string().url().nullable(),
  //   createdOn: date().default(() => new Date()),
});

export default validations;
