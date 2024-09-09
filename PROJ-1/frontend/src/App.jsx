import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [jokes, setjokes] = useState([]);
  

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((res)=>{
      setjokes(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <>

      <h1> me me me</h1>
      <p>JOKES: {jokes.length}</p>
    {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
        ))
    }
    </>
  )
}

export default App
