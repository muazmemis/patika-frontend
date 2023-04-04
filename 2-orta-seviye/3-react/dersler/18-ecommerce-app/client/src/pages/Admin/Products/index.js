import { deleteProduct, fetchProducts } from "../../../api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Popconfirm, Table } from "antd";
import { Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

function AdminProducts() {
  const { isLoading, data, error } = useQuery(
    ["admin:products"],
    ({ pageParam = 1 }) => fetchProducts({ pageParam })
  );

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>
              <Button colorScheme="yellow">Edit</Button>
            </Link>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("deleted");
                  },
                });
              }}
              onCancel={() => console.log("cancelled")}
              okText="Yes"
              cancelText="No"
              placement="top"
            >
              <Button ml={5} colorScheme="pink">
                Delete
              </Button>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"2xl"} p={5}>
          Products
        </Text>
        <Link to="/admin/products/add">
          <Button colorScheme="teal">Add a product</Button>
        </Link>
      </Flex>
      <Table dataSource={data} columns={columns} rowKey={"_id"} />
    </div>
  );
}

export default AdminProducts;
