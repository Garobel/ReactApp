import React from 'react'
import { NavLink } from 'react-router-dom'

const RemoveToken = () => {
  localStorage.removeItem('token')
   window.location = "/"

}


const PrivateM = () => (

          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/especialidades">Especialidades</NavLink></li>
            <li><NavLink to="/cursos">Courses</NavLink></li>
            <li><NavLink to="/profesores">Teachers</NavLink></li>
            <li ><span  onClick = {() => RemoveToken()}>Log out</span></li>

          </ul>

)

export default PrivateM
