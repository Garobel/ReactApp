import React,{useEffect} from "react"
import { connect } from "react-redux";
import store from "../../redux/store";
import Banner from "../Organismos/Banner";
import {getAllCourses} from "../../redux/actionCreators"
import Card from "../Organismos/Card";


const Courses = ({match,cursitos}) => {

  useEffect(() => {

    store.dispatch(getAllCourses())

  },[match]) 


  return(
    <>
      <Banner
        color = "dark-color"
        image={{
        src:"https://i.hurimg.com/i/hdn/75/0x0/5db94fed0f2544229425110f.jpg",
        alt:"courses picture"
        }}
        title= "Courses"
        subtitle= "Prepare yourself in a journey limetless" 
      />
    

    {
      cursitos &&
      <main className="ed-grid lg-grid-3 m-grid-2">
        {
          cursitos.map(c => (
            <Card
            foto ={c.foto}
            nombre={c.nombre}
            key={c.id}
            path="cursos"
            cardId={c.id}
            />
              
          ))
        }
      </main>
    }

    </>
  
  )
}

const mapStateToProps = state => ({

  cursitos : state.courseReducer.cursos


})

export default connect(mapStateToProps) (Courses)
