import React from 'react'


const Teacher = ({id,imagen,alt,nombre,country}) => (

  <article key={id}>
      <div className= "s-px-4">
        <div className="img-container circle s-mb-2 s-border">
          <img src={imagen} alt={alt}/>
        </div>
      </div>
      <div className="s-center">
        <p className="t3 s-mb-1">{nombre}</p>
        <p>{country}</p>
      </div>
    </article>


)


export default Teacher
