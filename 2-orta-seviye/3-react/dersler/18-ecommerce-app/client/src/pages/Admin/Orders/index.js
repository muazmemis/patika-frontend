import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../../api";
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function AdminOrders() {
  const { isLoading, data, error } = useQuery(["admin:orders"], () =>
    fetchOrders()
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Text fontSize="2xl" p={5}>
        Orders
      </Text>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Items</Th>
              <Th>Address</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((order) => (
              <Tr key={order._id}>
                <Td>{order.user.email}</Td>
                <Td>{order.items.map((item) => item.title).join(", ")}</Td>
                <Td>{order.address}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminOrders;
