import React, {Fragment, useEffect } from "react"
import { connect } from "react-redux"
import { getCourse, getFragment } from "../../redux/actionCreators"
import store from "../../redux/store"
import { Link } from "react-router-dom"



const Fragmen = ({course,fragment}) => {

  useEffect(()=>{
    store.dispatch(getCourse(1))
    store.dispatch(getFragment(1))
  },[])

  return(
    <>
      <div className="class-page-container background dark-color s-pxy-4">
      {
        (course,fragment) &&

        <div className="ed-grid lg-grid-12">
        <div className="lg-cols-8">
          <div className="image-container s-ratio-16-9 m-cols-1 ">
            <iframe title= "react" width="450" height="250" src={fragment.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div >
            <h2 className= "color light-color s-mb-0">{fragment.Title}</h2>
            <span className="color light-color">{course.nombre}</span>         
          </div>

        </div>
        <div className="lg-cols-4">
          <div>
            
            {
              course.description.map((d,ind) =>(
                <div key = {ind} className= "course-class l-section">
                  
                  <h3 className="color light-color">{d.title}</h3>
                  <ul ><Link to={`/clase/${d.ind}`} className="color light-color" >
                    <li   dangerouslySetInnerHTML = {{__html:d.descrip}}/>
                    </Link></ul>
                </div>))
              
            }
          </div>
        </div>
          
      </div>
      }

      </div>


    </>

  )
}

const mapStateToProps = state => ({
  course: state.courseReducer.course ,
  fragment: state.classReducer.fragment
})

export default connect(mapStateToProps,{})(Fragmen)
