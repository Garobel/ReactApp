import React from 'react'
import Home from "./pages/Home"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Protected from './Route/protected'
import Speciality from "./pages/Speciality"
import Specialities from "./pages/Specialities"
import Courses from "./pages/Courses"
import Course from "./pages/Course"
import Teachers from "./pages/Teachers"
import Fragmen from "./pages/Fragmen"
import Public from './Route/Public'
import Register from './pages/Register'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import Header from './Organismos/Header'


const App = () => (

  <Router>
    <Header/>
    <Switch>    
      <Protected path="/" exact component={Home}/>
      <Protected path="/especialidades" exact component={Specialities}/>
      <Protected path="/especialidades/:id" exact component={Speciality}/>
      <Protected path="/cursos" exact component={Courses}/>
      <Protected path="/cursos/:id" exact component={Course}/>
      <Protected path="/profesores" exact component={Teachers}/>
      <Protected path="/clase/:id" exact component={Fragmen}/>

      <Public path="/login" exact component={Login}/>
      <Public path="/register" exact component={Register}/>

      <Route component={Page404}/>

    </Switch>
  </Router>
)

export default App
