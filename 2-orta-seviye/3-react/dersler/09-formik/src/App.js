import { Formik } from "formik";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        // bu değerler başlangıçta verdiğimiz değerler. bunlar olmasada çalışır
        initialValues={{
          firstName: "Muaz",
          lastName: "Memiş",
          email: "muazmemis@gmail.com",
          gender: "male",
          hobies: [],
          country: "turkey",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" style={{ marginRight: "10px" }}>
              First Name
            </label>
            <input
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
            />

            <br />
            <br />

            <label htmlFor="lastName" style={{ marginRight: "10px" }}>
              Last Name
            </label>
            <input
              name="lastName"
              placeholder="Last"
              onChange={handleChange}
              value={values.lastName}
            />

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
              value={values.email}
            />

            <br />
            <br />

            <label htmlFor="gender" style={{ marginRight: "10px" }}>
              Gender
            </label>
            <span>male</span>
            <input
              name="gender"
              type="radio"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>female</span>
            <input
              name="gender"
              type="radio"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />

            <br />
            <br />

            <div>
              Football
              <input
                type="checkbox"
                name="hobies"
                value="Football"
                onChange={handleChange}
              />
            </div>
            <div>
              Cinema
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />
            </div>
            <div>
              Photography
              <input
                type="checkbox"
                name="hobies"
                value="Photography"
                onChange={handleChange}
              />
            </div>

            <br />
            <br />

            <select
              name="country"
              onChange={handleChange}
              value={values.country}
            >
              <option value="england">England</option>
              <option value="turkey">Turkey</option>
              <option value="usa">USA</option>
            </select>

            <br />
            <br />

            <button type="submit">Submit</button>

            <br />
            <br />

            {JSON.stringify(values)}
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
