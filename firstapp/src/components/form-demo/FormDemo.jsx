import { useForm } from "react-hook-form";

function FormDemo() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onFormSubmit(obj) {
    console.log(obj);
  }

  //console.log(errors);

  return (
    <div>
      <h1 className="text-center text-info display-3">Form Demo</h1>
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          {...register("username", { required: true,minLength:4 })}
        />
        {/* validation error messages of username */}
        {errors?.username?.type === "required" && <p className="text-danger">Username is required</p>}
        {errors?.username?.type==='minLength' &&  <p className="text-danger">Min length should be 4</p> }

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          {...register("email",{required:true})}
        />
        {/* validation err msgs for email */}
        {errors?.email?.type==='required' && <p className="text-danger">Email is required</p>}

        <select
          {...register("technologies")}
          id=""
          className="form-select mb-3"
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="react">react</option>
        </select>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default FormDemo;



// ?:    condition ? exp-1 : exp-2  (if else)
// condition && exp  (if)

