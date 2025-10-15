//create HTTP SERVER
import exp from "express";
const app = exp();

//add body parser middleware
app.use(exp.json());

//middleware-1
function middleware1(req, res, next) {
  console.log("middleware-1");
  //req verification business logic
  //either send res back to client or forward req to next middleware
  // res.json({message:"This res from middleware-1"})
  next();
}

//middleware-2
function middleware2(req, res, next) {
  console.log("middleware-2");
  next();
}

//use middleware
//execute middleware for every req
//  app.use(middleware1)
app.use(middleware2);
//execute middleware for a specific req

//assign a port number to HTTP SERVER
const port = 8080;
app.listen(port, () => console.log(`server listening on port ${port}`));

//sample test data
let usersList = [
  { id: 100, name: "ravi", age: 21 },
  { id: 200, name: "vikas", age: 234 },
];

//CREATE USER API ( routes for create user,read user,update user and delete user)

// route read users
app.get("/users", middleware1, (req, res) => {
  //send res
  res.json({ message: "all users", payload: usersList });
});

// route read user by id (URL param)
app.get("/users/:userId", (req, res) => {
  //read url param from req
  let idOfUrl = Number(req.params.userId); //{ userId : "200"}
  //find user with idOfUrl
  let user = usersList.find((userObj) => userObj.id === idOfUrl);
  //if user not found
  if (user === undefined) {
    res.json({ message: "User not found" });
  } else {
    res.json({ message: "single user", payload: user });
  }
});

// route create user
app.post("/user", (req, res) => {
  //get body from req
  let newUser = req.body;
  //push newUser into users
  usersList.push(newUser);
  //res
  res.json({ meesage: "new user created" });
});

// route update user by id
app.put("/user/:userId", (req, res) => {
  //get modified user from client
  let modifiedUser = req.body;
  //replace userObj in usersList with modifiedUser
  let userIndex = usersList.findIndex((userObj) => userObj.id === modifiedUser.id);
  //if user not found
  if (userIndex === -1) {
    res.send({ message: "User not found to update" });
  } else {
    usersList.splice(userIndex, 1, modifiedUser);
    res.send({ message: "User updated" });
  }
});

// route delete user by id
app.delete("/user/:userId", (req, res) => {
  //get user id from URL path
  let idOfUser = Number(req.params.userId);
  //get index of userObj to delete
  let userIndex = usersList.findIndex((userObj) => userObj.id === idOfUser);
  //if user not found
  if (userIndex === -1) {
    res.json({ message: "User not found to delete" });
  } else {
    usersList.splice(userIndex, 1);
    res.json({ message: "User deleted" });
  }
});


//Product API
    //create product
    //read all prods
    //read a prod by id
    //update a prod by id
    //delete a prod by id