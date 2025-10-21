import exp from 'express'
export const productRoute=exp.Router()

//sample data
let productsList=[
    {id:1234,name:"TV",price:200000}
]

//Product API
    //create product
    //read all prods
    productRoute.get("/products",(req,res)=>{
        res.json({message:"all products",payload:productsList})
    })
    //read a prod by id
    //update a prod by id
    //delete a prod by id