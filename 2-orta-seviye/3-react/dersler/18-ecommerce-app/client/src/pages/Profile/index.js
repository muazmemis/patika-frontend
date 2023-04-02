import { Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <Heading>Profile</Heading>
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}

export default Profile;
