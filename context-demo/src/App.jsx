import React from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

function App() {
  return (
    <div className="text-danger">
      <h1 className="text-center text-primary display-3"> Context Demo</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 bg-warning p-5">
            <Child1 />
          </div>
          <div className="col-sm-6 bg-info p-5">
            <Child2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
