import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "mmemis", bio: "lorem ipsum" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>Profile</h1>
      {!user && (
        <button onClick={handleLogin}>{loading ? "loading" : "login"}</button>
      )}
      <code>{JSON.stringify(user)}</code>

      {user && <button onClick={handleLogout}>logout</button>}
    </div>
  );
}

export default Profile;
