import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";

function Card({ product }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#/">
        <Image src={product.photos[0]} alt="product" loading="lazy" />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {moment(product.createdAt).format("DD/MM/YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tigth">
            {product.title}
          </Box>
          <Box>{product.price} $1000</Box>
        </Box>
      </Link>

      <Button colorScheme="blue">Add to cart</Button>
    </Box>
  );
}

export default Card;
