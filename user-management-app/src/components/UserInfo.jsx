import UserForm from "./UserForm";
import UserList from "./UserList";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

function UserInfo() {
  let { register, handleSubmit, setValue } = useForm();

  //users state
  let [users, setUsers] = useState([]);
  let [error, setError] = useState("");

  //To deal with Modal
  let [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

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

  const handleUpdateUser = (userObjectToEdit) => {
    // console.log(userObjectToEdit);
    //open Modal
    handleShow();
    //display data of existing user in edit form
    setValue("id", userObjectToEdit.id);
    setValue("username", userObjectToEdit.username);
    setValue("dob", userObjectToEdit.dob);
    setValue("email", userObjectToEdit.email);
  };

  const handleReadUsers = async () => {
    let res = await fetch("http://localhost:3000/users");
    let usersData = await res.json();
    setUsers(usersData);
  };

  const saveModifiedUser = async (modifiedUserObj) => {
    //close modal
    handleClose();
   // console.log(modifiedUserObj);
    //update existing user in json-server with modified user object(HTTP PUT)
    let res = await fetch(`http://localhost:3000/users/${modifiedUserObj.id}`, {
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(modifiedUserObj)
    });

   // console.log(res)
    if(res.status===200){
      //read latest users
      handleReadUsers()
    }
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

      {/* modal to update user resource */}
      <Modal show={show}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={handleSubmit(saveModifiedUser)}>
              <input disabled type="text" {...register("id")} placeholder="ID" className="form-control mb-3" />
              <input type="text" {...register("username")} placeholder="Username" className="form-control mb-3" />
              <input type="date" {...register("dob")} className="form-control mb-3" />
              <input type="email" {...register("email")} className="form-control mb-3" />
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default UserInfo;

// ?: condition?re-1:re-2
// &&  condition && re
