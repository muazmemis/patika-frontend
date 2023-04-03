import React from "react";
import { useCart } from "../../contexts/CartContext";
import { Alert, Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Cart() {
  const { items, removeFromCart } = useCart();
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box p={10}>
      {items.length < 1 && <Alert status="warning">Cart is empty</Alert>}

      {items.length > 0 && (
        <>
          <ul style={{ listStyleType: "decimal" }}>
            {items.map((item) => {
              return (
                <li key={item._id} style={{ marginBottom: 15 }}>
                  <Link to={`/product/${item._id}`}>
                    <Text fontSize={16}>
                      {item.title} - $ {item.price}
                    </Text>
                    <Image
                      htmlWidth={200}
                      loading="lazy"
                      src={item.photos[0]}
                      alt="cart item"
                    />
                  </Link>
                  <Button
                    mt={2}
                    mb={5}
                    size={"sm"}
                    colorScheme="pink"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove from cart
                  </Button>
                </li>
              );
            })}
          </ul>

          <Box mt={5}>
            <Text fontSize={22}>Total: $ {total}</Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Cart;
