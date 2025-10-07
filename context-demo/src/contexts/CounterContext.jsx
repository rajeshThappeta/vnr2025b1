//create  and context object
import { createContext, useState } from "react";
export const counterContextObj = createContext();

//create component
function CounterContext({ children }) {

  //THIS DEMONSTRATES THE ISSUE WHEN  A CONTEXT HAS MULTIPLE STATES
  //TAKE A CONTEXT WITH SINGLE STATE
  //THIS LEADS PERFORMANCE IISUES WITH UNNECESSARY RE-RENDERINGS
  //state
  const [counter1, setCounter1] = useState(100);
  //functions to modify the state
  function increment1() {
    setCounter1(counter1 + 1);
  }
  function decrement1() {
    setCounter1(counter1 - 1);
  }

   const [counter2, setCounter2] = useState(200);
  //functions to modify the state
  function increment2() {
    setCounter2(counter2 + 1);
  }
  function decrement2() {
    setCounter2(counter2 - 1);
  }

  return (
    <counterContextObj.Provider value={{ counter1, increment1, decrement1,counter2,increment2,decrement2 }}>
      {/* this context state is available to all children of a parent */}
      {children}
    </counterContextObj.Provider>
  );
}

export default CounterContext;
