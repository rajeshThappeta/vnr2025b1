import './StateDemo.css'
import { useState } from 'react'

function StateDemo() {

    //state
    let [counter, setCounter] = useState(0)
    let [emp, setEmp] = useState({ eno: 100, name: 'ravi' })
    let [marks, setMarks] = useState([10, 20])

    function incrementCounter() {
        setCounter(counter + 1)
    }
    function decrementCounter() {
        setCounter(counter - 1)
    }
    function resetCounter() {
        setCounter(0)
    }


    function changeEmp() {
        setEmp({ ...emp, eno: 200, name: "ravi kumar" }) //{ eno: 100, name: 'ravi',eno:200}
    }

    function addNewMark(){
        setMarks([...marks,30]) //[10,20,30]
    }

    return (
        <div className='container'>
            <h2>State change demo</h2>
            {/* counter */}
            <h3>Counter : {counter}</h3>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}> -</button>
            <button onClick={resetCounter}> reset</button>
            {/* person */}
            <h3>Eno :{emp.eno}</h3>
            <h3>Name :{emp.name}</h3>
            <button onClick={changeEmp}>Change Emp</button>

            {/* marks */}
            {
                marks.map(m=><h3 key={m}>{m}</h3>)
            }
            <button onClick={addNewMark}>Add element</button>

        </div>
    )
}

export default StateDemo