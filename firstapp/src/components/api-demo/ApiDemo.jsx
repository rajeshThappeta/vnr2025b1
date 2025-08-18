import './ApiDemo.css'
import { useState, useEffect } from 'react'

function ApiDemo() {

    let [posts, setPosts] = useState([])

    //make api req
    async function getDataFromAPI() {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let postsList = await res.json()
        setPosts(postsList)
    }



    useEffect(() => {
        getDataFromAPI()
    }, [])




    return (
        <div className='container'>
            <h2>API Demo</h2>
            {/* table opf posts */}
            <table>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(postObj => <tr key={postObj.id}>
                            <td>{postObj.userId}</td>
                            <td>{postObj.id}</td>
                            <td>{postObj.title}</td>
                            <td>{postObj.body}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApiDemo;