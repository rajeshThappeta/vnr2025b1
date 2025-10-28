//create HTTP SERVER
import exp from "express";
import { MongoClient } from "mongodb";
const app = exp();

import { userRoute } from "./routes/userRoutes.js";
import { productRoute } from "./routes/productRoutes.js";

//db config
//create  database client
const dbClient = new MongoClient("mongodb://localhost:27017");

//connect
dbClient
  .connect()
  .then(() => {
    //get database object
    const dbObj=dbClient.db('vnrusers')
    //get collection object
    const usersCollectionObj=dbObj.collection("users")
    //share usercCOllcetionObj
    app.set("usersCollectionObj",usersCollectionObj)
        
    console.log("DB connection success");
    //start http server
    //assign a port number to HTTP SERVER
    const port = 8080;
    app.listen(port, () => console.log(`server listening on port ${port}`));
  })
  .catch((err) => console.log("Err in DB connection :", err));

//add body parser middleware
app.use(exp.json());

//if path starts with /user-api, handover req to userRoutes.js
app.use("/user-api", userRoute);
//if path starts with /product-api, handover req to productRoutes.js
app.use("/product-api", productRoute);

//handle invalid path(Keep it last)
app.use((req, res, next) => {
  res.json({ message: `Invalid path ${req.path}` });
});

//error handling
app.use((err, req, res, next) => {
  res.json({ message: "error occurred", reason: err.message });
});





