import React from "react"
import { Link } from "react-router-dom"

const Card = ({foto,nombre,cardId,path,spe}) => {
  
  return(

    <article className="card s-border">
      {spe ? 
       <div>
        <div className="imgcontainer s-ratio-16-9">

          <Link to="/cursos">
          <img src={foto} alt={nombre}/>
          </Link>
  
        </div>
        <div className="card__data s-pxy-2">
         <h3 className="t4 center">{nombre}</h3>
        </div>
        </div>: 
        <div>
          <div className="imgcontainer s-ratio-16-9">

          <Link to={`/${path}/${cardId}`}>
            <img src={foto} alt={nombre}/>
          </Link>
  
          </div>
          <div className="card__data s-pxy-2">
            <h3 className="t4 center">{nombre}</h3>
          </div>
          </div>}
      
       
         
    </article>
      
  )
}



export default Card
