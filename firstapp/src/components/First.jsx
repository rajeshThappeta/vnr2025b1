import './First.css'

function First(props) {
    console.log(props) // {data :{eno,name,age}}
    return (
        <div className='emp-data'>
            <h2>{props.data.eno}</h2>
            <h2>{props.data.name}</h2>
            <h2>{props.data.age}</h2>
        </div>
    )
}


export default First;