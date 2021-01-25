import React,{useEffect} from "react"
import { connect } from "react-redux"
import Banner from "../Organismos/Banner"
import Card from "../Organismos/Card"
import {getAllSpecialities} from "../../redux/actionCreators"
import store from "../../redux/store"


const Specialities = ({Special,match}) => {

  useEffect(() => {

    store.dispatch(getAllSpecialities())

  },[match])

  return(

    <>

      <Banner
      color = "first-color"
      image={{
      src:"https://www.mdx.ac.uk/__data/assets/image/0024/413448/Information-Technology.jpg",
      alt:"specialities picture"
      }}
      title= "Specialities"
      subtitle= "Advance courses to master any of the technologies that we offer you. " 
      />

     {
       Special &&
       <main className="ed-grid lg-grid-3 m-grid-2">
         {
           Special.map(s => (
             <Card
               foto ={s.foto}
               nombre={s.nombre}
               key={s.id}
               cardId={s.id}
               path={"especialidades"}
             />
           
           ))
         }
       </main>
        
     
     
      } 
    
    </>
  )
}

const mapStateToProps = state => ({

   Special : state.specialityReducer.especialities
})
  


export default connect(mapStateToProps) (Specialities)
