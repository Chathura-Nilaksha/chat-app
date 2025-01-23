import React from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { useState } from 'react'

const Login = () => {
    const [currState, setCurrState] = useState("Sign up");
  return (
    <div className='login'>
      <img className="logo" src={assets.logo_big} alt="" />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState==="Sign up" ? 
                        <input type="text" className="form-input" placeholder='Username' required/>
                        :
                        null}
        <input type="email" className="form-input" placeholder='Email address' required/>
        <input type="password" className="form-input" placeholder='Password' required/>
        <button type='submit'>{currState==="Sign up" ? "Create an account":"Login now"}</button>
        <div className="login-term">
          <input type="checkbox"/>
          <p>Agree to the terms of use & private policy.</p>
        </div>
        <div className="login-forgot">
          {
            currState==="Sign up" ? 
                          <p className="login-toggle">Already have an account <span onClick={()=>setCurrState("Login")}>Login HERE</span></p>
                          : 
                          <p className="login-toggle">To Create an account <span onClick={()=>setCurrState("Sign up")}>CLICK HERE</span></p>
          }
          </div>
      </form>
      
    </div>
  )
}

export default Login
