import UserForm from "./UserForm";
import UserList from "./UserList";
import { useState, useEffect } from "react";

function UserInfo() {
  //users state
  let [users, setUsers] = useState([]);
  let [error, setError] = useState("");

  //functions to modify state
  const handleCreateUser = async (newUser) => {
    try {
      //make HTTP POST req to save this newUser in API(local API/real API)
      let res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      console.log(res);
      if (res.status === 201) {
        setUsers([...users, newUser]);
        setError("");
        handleReadUsers();
      }
      if (res.status === 404) {
        setError(res.statusText);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  //delete user
  const handleDeleteUser = async (id) => {
    let res = await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
    console.log(res);
    let removedUser = await res.json();
    if (res.status === 200) {
      handleReadUsers();
    }
  };

  const handleUpdateUser = () => {};
  const handleReadUsers = async () => {
    let res = await fetch("http://localhost:3000/users");
    let usersData = await res.json();
    setUsers(usersData);
  };

  //get existing users data when page loded
  useEffect(() => {
    handleReadUsers();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        {error.length !== 0 && <p className="text-danger fs-2 text-center">{error}</p>}
        <UserForm handleCreateUser={handleCreateUser} />
      </div>
      <div className="col-md-6">
        <UserList users={users} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser} />
      </div>
    </div>
  );
}

export default UserInfo;

// ?: condition?re-1:re-2
// &&  condition && re
