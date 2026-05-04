import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance.get("/users")
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name} - {user.email}</p>
      ))}
    </div>
  );
}

export default UserList;
