import React, { useContext, useState } from 'react'
import UserContext from '../context/useContext'


const Login = () => {
    const [userName, setUserName] = useState()
    const [passowrd, setPassword] = useState()

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, passowrd})
    }
  return (
    <div>
        <h2>login </h2>
        <input type="text" placeholder='Username' value={userName} onChange={(e)=> setUserName(e.target.value)}/>
        <input type="text" placeholder='Password' value={passowrd} onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login