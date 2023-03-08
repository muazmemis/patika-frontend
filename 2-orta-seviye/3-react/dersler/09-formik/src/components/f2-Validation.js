import { useFormik } from "formik";
// import validations from "./f2-validations";
import validationSchema from "./f2-validations";

function Validation() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => console.log(values),
    // validationSchema: validations,
    validationSchema,
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" onChange={handleChange} value={values.email} />

        <br />
        <br />

        <label>Password</label>
        <input
          name="password"
          onChange={handleChange}
          value={values.password}
        />

        <br />
        <br />

        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          value={values.passwordConfirm}
        />

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Validation;
