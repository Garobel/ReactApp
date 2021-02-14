import React,{useEffect} from "react"
import { connect } from "react-redux"
import store from "../../redux/store"
import { getCourse } from "../../redux/actionCreators"
import Banner from "../Organismos/Banner"
import { Link } from "react-router-dom"




const Course = ({course}) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
  },[])



  return(
   <>
   { course && 
   <>
    <Banner 
      color = "dark-color"
      title = {course.nombre}
      subtitle = {course.subtitle}
      information = {course.information}
      image = {{
        src :  course.foto,
        alt :  course.nombre
      }}
      speciality = {course.speciality_name}
      key={course.id}
      coursebanner
   
    />
    <main className= "ed-grid lg-grid-10">
      <div className="lg-cols-7">

        <div className="course-fetures ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom ">
          <div>
            <h4>You will learn</h4>
            <ul dangerouslySetInnerHTML = {{__html:course.youlearn}}/>  
          </div>
          <div>
            <h4>Previous knowlegde</h4>
            <ul dangerouslySetInnerHTML = {{__html:course.requirements}}/>
          </div>
          <div>
            <h4>Course level</h4>
            <p>{course.level}</p>
          </div>

        </div>
        
        <h2>About this course </h2>
        <div className=" s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                
          {course.description.map((d,ind) =>(
            <div key = {ind} className= "course-class l-section">
              
              <h3 >{d.title}</h3>
              <ul ><Link to={`/clase/${d.ind}`} className="color dark-color" >
                <li   dangerouslySetInnerHTML = {{__html:d.descrip}}/>
                </Link></ul>
            </div>))
          }
                     
        </div>
      </div>
      <div className="lg-cols-3 s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
        <h2 className="t3">Teacher</h2>
        
          <p>{course.teacher}</p>
        
      </div>
    </main>

   </>
   }
   </>
  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course
})

export default connect(mapStateToProps,{}) (Course)
