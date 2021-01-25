import React,{useEffect} from "react"
import { connect } from "react-redux"
import { getAllTeachers } from "../../redux/actionCreators"
import Banner from "../Organismos/Banner"
import store from "../../redux/store"
import Teacher from "../Organismos/Teacher"




const Teachers = ({match,teachers}) => {

  useEffect(() =>{
    store.dispatch(getAllTeachers())
  },[match])


  return(
    <>
      <Banner
      color= 'third-color'
      image= {{
        src: "https://www.magisnet.com/wp-content/uploads/2020/02/clima-escolar.jpeg",
        alt: "teacher pic banner"

      }}
      title='Teachers'
      subtitle= 'They will guide you to achive your goals'
      
      />
      
      {
        teachers &&
        <main className= "ed-grid m-grid-2 lg-grid-4 row-gap">
        {
          teachers.map( t => (
            <Teacher 
              key = {t.id}
              imagen = {t.foto}
              alt = "foto profesor"
              nombre = {t.nombre}
              country = {t.country}
            
            />
          ))
        }
        </main>
      }





    </>

  )
}

const mapStateToProps = state => ({

  teachers : state.teacherReducer.teachers
})

export default connect(mapStateToProps,{}) (Teachers)
