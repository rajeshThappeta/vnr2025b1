//create HTTP SERVER
import exp from "express";
const app = exp();

//add body parser middleware
app.use(exp.json())

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
app.get("/users", (req, res) => {
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
    app.post('/user',(req,res)=>{
            //get body from req
            let newUser=req.body
           //push newUser into users
           usersList.push(newUser)
           //res
           res.json({meesage:"new user created"})
    })



// route update user by id
// route delete user by id




