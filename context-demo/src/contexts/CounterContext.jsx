//create  and context object
import { createContext, useState } from "react";
export const counterContextObj = createContext();

//create component
function CounterContext({ children }) {
  //state
  const [counter, setCounter] = useState(100);
  //functions to modify the state
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <counterContextObj.Provider value={{ counter, increment, decrement }}>
      {/* this context state is available to all children of a parent */}
      {children}
    </counterContextObj.Provider>
  );
}

export default CounterContext;
