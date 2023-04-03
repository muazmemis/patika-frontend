import React, { useRef, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";

function Cart() {
  const { items, removeFromCart, emptyCart } = useCart();
  const total = items.reduce((acc, item) => acc + item.price, 0);

  const [address, setAddress] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id);
    const input = {
      address,
      items: JSON.stringify(itemIds),
    };

    await postOrder(input);
    emptyCart();
    onClose();
  };

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
                      loading=""
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

          <Button mt={2} size={"sm"} colorScheme="green" onClick={onOpen}>
            Order
          </Button>

          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Address"
                    value={address}
                    onChange={({ target }) => setAddress(target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
}

export default Cart;
