//cteate min-express app(seperate route)
import exp from "express";
export const userRoute = exp.Router();
//User API

//CREATE USER API ( routes for create user,read user,update user and delete user)

// route read users
userRoute.get("/users", async (req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //read users from db
  let usersData = await usersCollectionObj.find().toArray();
  //send res
  res.json({ message: "all users", payload: usersData });
});

// route read user by name(URL param)
userRoute.get("/users/:name", async (req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //get name from url
  let username = req.params.name;
  //find user by username
  let userObj = await usersCollectionObj.findOne({ name: username });
  //send res
  res.json({ messsage: "one user", payload: userObj });
});

// route create user
userRoute.post("/user", async (req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //read body of req
  let newUser = req.body;
  if (newUser.name && newUser.age && newUser.salary) {
    //insert new user in db
    await usersCollectionObj.insertOne(newUser);
  } else {
    res.json({ message: "Invalid user object" });
  }
});

// route update user by name
userRoute.put("/user/:name", async (req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //get modified user from client
  let modifiedUser = req.body;
  //update
  await usersCollectionObj.updateOne({ name: modifiedUser.name }, { $set: { ...modifiedUser } });
  //res
  res.json({ message: "User modified" });
});

// route delete user by name
userRoute.delete("/user/:name", async (req, res) => {
  //get usersCollectionObj
  const usersCollectionObj = req.app.get("usersCollectionObj");
  //get name from urop
  let username = req.params.name;
  //delete user
  await usersCollectionObj.deleteOne({ name: username });
  //res
  res.json({ message: "User deleted" });
});
