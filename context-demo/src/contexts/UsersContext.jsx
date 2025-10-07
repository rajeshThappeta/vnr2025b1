import { createContext, useEffect, useState } from "react";

//create context obj
export const userContextObj = createContext();

function UsersContext({ children }) {
  let [users, setUsers] = useState([]);

  //fetch users data
  async function getUsers(){
    let res=await fetch('https://jsonplaceholder.typicode.com/users',{method:"GET"})
    if(res.status===200){
        let usersList=await res.json()
        setUsers(usersList)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return <userContextObj.Provider value={users}>
  {children}
  </userContextObj.Provider>;
}

export default UsersContext;
