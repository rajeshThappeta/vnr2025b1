import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function CreateProduct() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //creatin gproduct
  const createProduct = async (newProd) => {
    //make HTTP POST request to create new product resource in local API
    let res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProd),
    });

    //if product created
    if (res.status === 201) {
      //if product create dsuccessfully, navigate to products component(programmatic navigation)
      navigate("/products");
    } else {
    }
  };

  return (
    <div>
      <p className="display-3 text-center text-info">Create new Product</p>
      {/* form */}
      <form className="w-50 mx-auto" onSubmit={handleSubmit(createProduct)}>
        <input type="text" {...register("productName")} className="form-control mb-3" placeholder="Name of product" />
        <input type="text" {...register("productBrand")} className="form-control mb-3" placeholder="Brand" />
        <input type="number" {...register("productPrice")} className="form-control mb-3" placeholder="Price" />
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
