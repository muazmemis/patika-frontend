import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import validations from "./validations";
// import useFormik from "yup";

function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validations,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl mt="5">
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl mt="5">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.password}
                />
              </FormControl>
              <FormControl mt="5">
                <FormLabel>Password Confirm</FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.passwordConfirm}
                />
              </FormControl>
              <Button mt="5" width="full" type="submit">
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signup;