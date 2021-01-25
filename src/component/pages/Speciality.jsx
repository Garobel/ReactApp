import React,{useEffect} from "react"
import { connect } from "react-redux"
import store from "../../redux/store"
import {getSpeciality} from "../../redux/actionCreators"
import Banner from "../Organismos/Banner"
import Card from "../Organismos/Card"




const Speciality = ({special}) => {

  useEffect(()=> store.dispatch(getSpeciality(2)),[])

  

    return(
      
      <>
        { special &&
        <>
      
          <Banner
          
          color="dark-color"
          title={special.nombre}
          subtitle = {special.subtitle}
          image={{
            src : special.foto,
            alt : special.nombre
          
          }}
          especiality
          />
        
         <main className= "ed-grid lg-grid-10">
          <div className="lg-cols-7">

            <div className="course-fetures ed-grid lg-grid-3 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom ">
              <div>
                <h4>You will learn</h4>
                <ul dangerouslySetInnerHTML = {{__html:special.learn}}/>
              </div>
              <div>
                <h4>Previous knowlegde</h4>
                <ul dangerouslySetInnerHTML = {{__html:special.requirements}}/> 
              </div>
              <div>
                <h4>Course level</h4>
                <p>{special.level}</p>
              </div>
              

            </div>
            <h2>Requirements</h2>
              <div className= "course-fetures ed-grid lg-grid-2 l-block s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                  {special.requirement.map((ts,index)=>(
                    <Card
                    foto ={ts.foto}
                    nombre={ts.nombre}
                    key={index}
                    path="cursos"
                    cardId={index}
                    spe
                    />
                  ))}
              </div>

                <h2>About this course </h2>
            <div className=" s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">

              {special.description.map((di) =>(
                <div key= {di.id} className= "course-class l-section">
                  <h3  >{di.title}</h3>
                   <ul ><li  dangerouslySetInnerHTML = {{__html:di.descrip}}/></ul>
                </div>))}

            </div>
            </div>
    
            <div className="lg-cols-3 s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
               <h2 className="t3">Teacher</h2>
        
                 <p>{special.teacher}</p>
        
              </div>
          

          
          </main>
        </>
        }
      </>
    


    )

}

const mapStateToProps = state =>({
  special : state.specialityReducer.speciality
})

export default connect(mapStateToProps,{}) (Speciality)
