
import {useState,useEffect} from 'react'

function Products() {
  let [productsList,setProductsList]=useState([])

  //to get products from local API
  const getProducts=async()=>{
    let res=await fetch("http://localhost:3000/products")
    let prds=await res.json()
    setProductsList(prds)
  }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {
          productsList.map(productObj=><div className='col' key={productObj.id}>
            <div className="card-card body">
              <button className="btn btn-warning py-5 px-3">{productObj.productName}</button>
            </div>
          </div>)
        }
       </div>
    </div>
  )
}

export default Products