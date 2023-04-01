import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#/">
        <Image src="https://bit.ly/sage-adebayo" alt="product" />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            01/04/2023
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tigth">
            Macbook pro
          </Box>
          <Box>Price: $1000</Box>
        </Box>
      </Link>

      <Button colorScheme="blue">Add to cart</Button>
    </Box>
  );
}

export default Card;
