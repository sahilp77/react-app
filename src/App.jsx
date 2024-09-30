
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [blog, setBlog] = useState([])
  console.log("Blog" , blog)

  useEffect(()=>{
    const getData = async() =>{
     const response =  await fetch('http://localhost:8000/api/rooms');
     const data = await response.json();
     setBlog(data);
     console.log(data);
      
    }

    getData();
  }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog App</h1>
        {blog.map((item) => (
          <div style={{color:"red"}} key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
