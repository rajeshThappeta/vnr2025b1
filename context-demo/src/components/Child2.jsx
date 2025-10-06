import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";

function Child2() {
  let { counter, decrement } = useContext(counterContextObj);
  return (
    <div className="text-center">
      <h2>Child-2</h2>
      <h3>Counter : {counter}</h3>
      <button className="btn btn-danger" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Child2;
