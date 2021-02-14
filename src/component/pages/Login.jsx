import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"

const Authentication = e => {
  e.preventDefault()

  const data = 
  {
    "email": e.target.email.value,
    "password": e.target.password.value,
    
  }
  
  axios.get(`${process.env.REACT_APP_API_USER}/users`,data)
  .then( r => {

    r.data.map(s => {

   
      if(data.email === s.email && data.password === s.password ){
          window.location = "/"
          return localStorage.setItem('token',Math.random())
      }
      
      return "welcome"
             
    })
  
  }).catch(x => (alert("error found")))
  
}

const Login = () => (

  <div className= "ed-grid">
    <div className="m-to-center m-60 to-40">
      <h1 className="center">Log In </h1>
      <form onSubmit={Authentication.bind()}>
        <div className="form__item">
          
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" placeholder="email adress" required/>
          </label>
        </div>

        <div className="form__item">
          
          <label htmlFor="password">
            Password
            <input type="password" name="password" id="password" placeholder="password" required/>
          </label>
        </div>
        <div className= "form__item">
          <input type="submit" className="button full" value="login"/>
        </div>
      </form>
      <div className="center">
        <p>if you don't have an account <Link to = "/register">Register Now</Link></p>
      </div>

    </div>

  </div>
)

export default Login
