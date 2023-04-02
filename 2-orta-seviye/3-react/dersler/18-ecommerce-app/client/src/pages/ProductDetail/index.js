import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { useCart } from "../../contexts/CartContext";

function ProductDetail() {
  const { addToCart, items } = useCart();
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const images = data.photos.map((url) => ({ original: url, thumbnail: url }));
  const findCartItem = items.find((item) => item._id === data._id);

  return (
    <div>
      <Button
        colorScheme={findCartItem ? "pink" : "green"}
        onClick={() => addToCart(data, findCartItem)}
      >
        {findCartItem ? "Remove from cart" : "Add to cart"}
      </Button>
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
