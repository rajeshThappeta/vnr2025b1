import { useForm } from "react-hook-form";

function UserForm({handleCreateUser}) { //{ handleCreateUser : function}
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <p className="fs-1 text-center text-info mt-5">Create User</p>
      <form className="p-4 bg-light" onSubmit={handleSubmit(handleCreateUser)}>
        <input type="text" {...register("username")} placeholder="Username" className="form-control mb-3" />
        <input type="date" {...register("dob")} className="form-control mb-3" />
        <input type="email" {...register("email")}  className="form-control mb-3" />
        <button  type="submit" className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
