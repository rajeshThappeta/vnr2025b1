import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";
import {userContextObj} from '../contexts/UsersContext'

function Child1() {

  console.log("Child-1 rendered")
  //get state from CounterContext
  let { counter1, increment1 } = useContext(counterContextObj);
   // let users=useContext(userContextObj)
 
  return (
    <div className="text-center">
      <h2>Child-1</h2>
      <h3>Counter1 : {counter1}</h3>
      <button className="btn btn-success" onClick={increment1}>+</button>
      {/* <h1>No of users : {users.length}</h1> */}
    </div>
  );
}

export default Child1;
