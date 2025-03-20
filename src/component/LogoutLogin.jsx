import React, { useState } from 'react'

function 
LogoutLogin() {
    const [isLoggedIn, setLoggedIn]=useState(false)
  return (
    <div>
        <h2>Login logout component</h2>
        <h3>{!isLoggedIn ? "Please Login": "Welcome back"}</h3>
        <button onClick={()=>setLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout": "Login"}</button>
    </div>
  )
}

export default 
LogoutLogin