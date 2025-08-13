import './App.css'
import First from './components/First'


//create component
function App() {


  let emps = [
    { eno: 100, name: "ravi", age: 21 },
    { eno: 200, name: "bhanu", age: 23 },
    { eno: 300, name: "manasa", age: 31 }
  ]

  //return react element
  return (
    <div>
      <h1>Welcome to React</h1>
      {/* Nest Fist component here */}
      <First data={emps[0]} />
      <First data={emps[1]} />
      <First data={emps[2]} />
    </div>

  )
}


export default App;






//let btn=document.quesrySlelctor("button")
//btn.addEventLister('click',()=>{....... })