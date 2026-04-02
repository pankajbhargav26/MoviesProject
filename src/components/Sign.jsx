import { useState } from "react";
import './Sign.css';
export default function Sign(){
    const[login , setlogin]=useState(true)
return(
    <div  className="container">
        <div className="form-container">
            <div className="form-toggle">
                <button className={login ? 'activate' : ""} onClick={()=>setlogin(true)}>LOGIN</button>
                <button className={login ? 'activate' : ""} onClick={()=>setlogin(false)}>SIGNUP</button>

            </div>
            {login ? <>
            <div className="form">
                <h2>Login Form</h2>
                <input placeholder=" Email"/>
                <input placeholder="Password"/>
                <a href="#">forget Password</a>
                <button>Login</button>
                <p>not a member? <a herf="#">sign up now</a></p>

            </div>
            </> : <>
             <h2>Sign UP Form</h2>
                <input placeholder=" Email"/>
                <input placeholder="Password"/>
                  <input placeholder="Confirm Password"/>
                
                <button>Login</button>
                
            </>}
        </div>
    </div>
)
}