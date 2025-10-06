import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";

function Child1() {
  //get state from CounterContext
  let { counter, increment } = useContext(counterContextObj);
  console.log(counter);
  return (
    <div className="text-center">
      <h2>Child-1</h2>
      <h3>Counter : {counter}</h3>
      <button className="btn btn-success" onClick={increment}>+</button>
    </div>
  );
}

export default Child1;
