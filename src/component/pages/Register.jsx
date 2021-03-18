import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Authentication2 = e => {
  e.preventDefault()

  const data = 
  {
    "name": e.target.fullname.value,
    "email": e.target.email.value,
    "password": e.target.password.value
  
    
  }

  axios.post(`${process.env.REACT_APP_API_USER}/users`, data)
  .then( () => {
    alert("Usuario Creado")
    window.location = "/"
    
  }).catch(x => (console.log(x)))
  
}


const Register = () => (

  <div className= "ed-grid">
  <div className="m-to-center m-60 to-40">
    <h1 className="center">Register </h1>
    <form onSubmit={Authentication2.bind()}>
    <div className="form__item">
        
        <label htmlFor="fullname">
          Full name
          <input type="text" name="fullname" id="fullname" required/>
        </label>
      </div>
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
        <input type="submit" className="button full" value="register"/>
      </div>
    </form>
    <div className="center">
        <p>if you have an account <Link to = "/login">Log in</Link></p>
      </div>

  </div>

</div>
)


export default Register
