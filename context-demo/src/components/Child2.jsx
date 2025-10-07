import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";
import {userContextObj} from '../contexts/UsersContext'

function Child2() {
    console.log("Child-2 rendered")

  let { counter2, increment2 } = useContext(counterContextObj);
 // let users=useContext(userContextObj)
  return (
    <div className="text-center">
      <h2>Child-2</h2>
      <h3>Counter2 : {counter2}</h3>
      <button className="btn btn-danger" onClick={increment2}>
        +
      </button>
       {/* <h1>No of users : {users.length}</h1> */}
    </div>
  );
}

export default Child2;
