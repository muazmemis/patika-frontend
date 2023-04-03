import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useCart } from "../../contexts/CartContext";

function Card({ product }) {
  const { addToCart, items } = useCart();

  const findCartItem = items.find((item) => item._id === product._id);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`product/${product._id}`}>
        <Image src={product.photos[0]} alt="product" loading="lazy" />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {moment(product.createdAt).format("DD/MM/YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tigth">
            {product.title}
          </Box>
          <Box>$ {product.price}</Box>
        </Box>
      </Link>

      <Button colorScheme={findCartItem ? "pink" : "green"} variant="solid" onClick={() => addToCart(product, findCartItem )}>
        {findCartItem ? "Remove from cart" : "Add to cart"}
      </Button>
    </Box>
  );
}

export default Card;
