import { Formik } from "formik";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" style={{ marginRight: "10px" }}>
              First Name
            </label>
            <input name="firstName" onChange={handleChange} />

            <br />
            <br />

            <label htmlFor="lastName" style={{ marginRight: "10px" }}>
              Last Name
            </label>
            <input name="lastName" placeholder="Last" onChange={handleChange} />

            <br />
            <br />

            <label htmlFor="email" style={{ marginRight: "10px" }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
            />

            <br />
            <br />

            <button type="submit">Submit</button>
          </form>
        )}

        {/* <Form>
          <label htmlFor="firstName" style={{ marginRight: "10px" }}>
            First Name
          </label>
          <Field name="firstName" placeholder="Jane" />

          <br />
          <br />

          <label htmlFor="lastName" style={{ marginRight: "10px" }}>
            Last Name
          </label>
          <Field name="lastName" placeholder="Doe" />

          <br />
          <br />

          <label htmlFor="email" style={{ marginRight: "10px" }}>
            Email
          </label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <br />
          <br />

          <button type="submit">Submit</button>
        </Form> */}
      </Formik>
    </div>
  );
}

export default App;
