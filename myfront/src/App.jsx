import { useState } from 'react'
import './App.css'
import axios from 'axios'
import {useNavigate}from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
     

  const form=() =>{
   axios.post("http://localhost:5000/new" ,{
    name,phone,age
   })
   .then((result)=>{
    console.log(result)
    if (result.statusText==="ok") navigate("/");
   })
  }
  return (
    <>
    <form onSubmit= {(e)=>{
      e.preventDefault()
      form()
    } }>
     <label htmlFor=""> First Name :</label>
     <input type="text" placeholder='Enter your name' value={name}  id='fname'  onChange={(e)=>{setName(e.target.value)}}  />
<br />
     <label htmlFor="">phone :</label>
     <input type="phone" placeholder='Enter your name'value={phone} id='phone' onChange={(e)=>{setPhone(e.target.value)}} />
<br />
     <label htmlFor="">Age :</label>
     <input type="age" placeholder='Enter your Age' value={age} id='age' onChange={(e)=>{setAge(e.target.value)}}/>
       <br />
       <button className='btn'> submit</button>
    </form>
    </>
  )
}

export default App