import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../../../api";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Flex,
  Textarea,
  Alert,
} from "@chakra-ui/react";
import { message } from "antd";
import { FieldArray, Formik } from "formik";
import validationSchema from "./validations";

function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, data, error } = useQuery(
    ["admin:product", product_id],
    () => fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error.message}</div>;
  }

  const handleSubmit = (values, bag) => {
    message.loading({ content: "Loading...", key: "updatable" });

    try {
      updateProduct(product_id, values);
      message.success({ content: "Updated!", key: "updatable", duration: 2 });
    } catch (e) {
      message.error({
        content: "Error! The product does not updated",
        key: "updatable",
        duration: 2,
      });
    }
  };

  return (
    <div>
      <Text fontSize={"2xl"}>Edit</Text>
      <Formik
        initialValues={{
          title: data.title,
          price: data.price,
          description: data.description,
          photos: data.photos,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <Flex my={5} justifyContent={"center"}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    isInvalid={touched.title && errors.title}
                  />
                  {touched.title && errors.title && (
                    <Alert status="error" mt={2} w={"25%"}>
                      {errors.title}
                    </Alert>
                  )}
                </FormControl>
                <FormControl mt={5}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    isInvalid={touched.description && errors.description}
                  />
                  {touched.description && errors.description && (
                    <Text color={"red.500"} mt={2} w={"25%"}>
                      {errors.description}
                    </Text>
                  )}
                </FormControl>
                <FormControl mt={5}>
                  <FormLabel>Price</FormLabel>
                  <Input
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    isInvalid={touched.price && errors.price}
                  />
                  {touched.price && errors.price && (
                    <Text color={"red.500"} mt={2} w={"25%"}>
                      {errors.price}
                    </Text>
                  )}
                </FormControl>
                <FormControl mt={5}>
                  <FormLabel>Photos</FormLabel>
                  <FieldArray
                    name="photos"
                    render={(arrayHelpers) => (
                      <div>
                        {values.photos &&
                          values.photos.map((photo, index) => (
                            <Box mb={5} key={index}>
                              <Input
                                name={`photos.${index}`}
                                value={photo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={isSubmitting}
                                w={"3xl"}
                                isInvalid={touched.photos && errors.photos}
                              />
                              <Button
                                ml={2}
                                colorScheme="red"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                Remove
                              </Button>
                            </Box>
                          ))}
                        <Button
                          colorScheme="blue"
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add a photo
                        </Button>
                      </div>
                    )}
                  ></FieldArray>
                </FormControl>

                <Button
                  colorScheme="green"
                  mt={5}
                  w={"full"}
                  type="submit"
                  isLoading={isLoading}
                  justifyContent={"center"}
                >
                  Submit
                </Button>
              </form>
            </Flex>
          </>
        )}
      </Formik>
    </div>
  );
}

export default ProductDetail;
