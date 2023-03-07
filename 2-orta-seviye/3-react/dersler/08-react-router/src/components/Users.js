import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setIsLoading(false));
  }, [users]);

  return (
    <div>
      Users
      {isLoading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path=":id" element={<User />} />
      </Routes>
    </div>
  );
}

export default Users;
