//cteate min-express app(seperate route)
import exp from 'express'
export const userRoute=exp.Router()
//User API

//sample test data
let usersList = [
  { id: 100, name: "ravi", age: 21 },
  { id: 200, name: "vikas", age: 234 },
];

//CREATE USER API ( routes for create user,read user,update user and delete user)

// route read users
userRoute.get("/users", (req, res) => {
  //send res
  res.json({ message: "all users", payload: usersList });
});

// route read user by id (URL param)
userRoute.get("/users/:userId", (req, res) => {
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
userRoute.post("/user", (req, res) => {
  //get body from req
  let newUser = req.body;
  //push newUser into users
  usersList.push(newUser);
  //res
  res.json({ meesage: "new user created" });
});

// route update user by id
userRoute.put("/user/:userId", (req, res) => {
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
userRoute.delete("/user/:userId", (req, res) => {
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