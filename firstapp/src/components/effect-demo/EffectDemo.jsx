import { useEffect, useState } from "react";

function EffectDemo() {
  let [counter1, setCounter1] = useState(100);
  let [counter2, setCounter2] = useState(300);

  function changeCounter1(){
    setCounter1(counter1+1)
  }

  function changeCounter2(){
    setCounter2(counter2+1)
  }

  //useEffcet hook waits until initial rendereing is completed
  //it calls effect function after that
  //if dependency array is empty, the effect function executes only once
  //if array has a state as dependecy, then effect executes every time when that state changes
  useEffect(() => {
    console.log("effect called");
  }, [counter2]);

  return (
    <div>
      <h3>useEffect demo</h3>
      <h3>Counter-1 {counter1}</h3>
       <h3>Counter-2 {counter2}</h3>
      <button onClick={changeCounter1} className="btn btn-success">Counter-1</button>
      <button onClick={changeCounter2} className="btn btn-danger" >Counter-2</button>
    </div>
  );
}

export default EffectDemo;

//1. render the component
//2. Make external interaction(file,APi,DOM etc...)

//initial render(loaded )
//re-render(state is changed)
