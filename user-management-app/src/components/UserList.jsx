function UserList({ users, handleDeleteUser, handleUpdateUser }) {
  return (
    <div>
      <h1 className="display-6 text-center text-info mt-5">List of Users</h1>
      <table className="table text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Date of birth</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.username}</td>
              <td>{userObj.dob}</td>
              <td>{userObj.email}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleDeleteUser(userObj.id)}>X</button>
              </td>
              <td>
                <button className="btn btn-warning" onClick={()=>handleUpdateUser(userObj)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
