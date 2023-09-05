import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function UsersList() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users", {
          headers: {
            Authorization: "Bearer " + (user && user.token),
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, [user]);

  return (
    <div>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              {user.firstname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default UsersList;
