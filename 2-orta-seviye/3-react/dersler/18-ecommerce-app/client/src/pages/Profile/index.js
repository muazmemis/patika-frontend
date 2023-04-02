import { Button, Heading } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  let nav = useNavigate();

  const handleLogout = async () => {
    logout(() => nav("/"));
  };

  return (
    <div>
      <Heading>Profile</Heading>
      <code>{JSON.stringify(user)}</code>

      <br />
      <br />
      <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
