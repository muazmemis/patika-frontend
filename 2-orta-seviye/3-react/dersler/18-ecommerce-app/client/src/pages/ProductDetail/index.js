import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";

function ProductDetail() {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const images = data.photos.map((url) => ({ original: url, thumbnail: url }));

  return (
    <div>
      <Button colorScheme="pink">Add to cart</Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.creatadAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      Image
      <Box margin="10px">
        <ImageGallery items={images}></ImageGallery>
      </Box>
    </div>
  );
}

export default ProductDetail;
