import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Textarea,
  Alert,
} from "@chakra-ui/react";
import { message } from "antd";
import { FieldArray, Formik } from "formik";
import validationSchema from "./validations";
import { createProduct } from "../../../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const queryClient = useQueryClient();
  const createProductMutation = useMutation(createProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const nav = useNavigate();

  const handleSubmit = (values, bag) => {
    message.loading({ content: "Loading...", key: "create" });
    const newValues = {
      ...values,
      photos: JSON.stringify(values.photos),
    };

    createProductMutation.mutate(newValues, {
      onSuccess: () => {
        message.success({ content: "created!", key: "create", duration: 2 });
        nav("/admin/products");
      },
    });
  };

  return (
    <div>
      <Text fontSize={"2xl"}>Add Product</Text>
      <Formik
        initialValues={{
          title: "Title test",
          price: "2500",
          description: "lorem ipsum 5",
          photos: [
            "https://picsum.photos/200/200",
            "https://picsum.photos/200/300",
            "https://picsum.photos/300/300",
          ],
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
            <Box my={5}>
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
                  justifyContent={"center"}
                  isLoading={isSubmitting}
                >
                  Save
                </Button>
              </form>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default AddProduct;
