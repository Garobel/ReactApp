import React,{useEffect} from "react"
import { connect } from "react-redux"
import store from "../../redux/store"
import Banner from "../Organismos/Banner"
import Publication  from "../Organismos/Publication";
import {getAllPosts} from "../../redux/actionCreators"

const Home = ({posts}) => {

  useEffect(() =>{
    store.dispatch(getAllPosts())
  },[])
  
  return(
    <>
      <Banner color= "dark-color" 
        image = {{
          src :  "https://i.pcmag.com/imagery/roundups/047l7lS9i8mIMvZ6Z2rwXI5-1..1569492807.jpg",
          alt :  "home pic"
        }}
        title ="Welcome to the best education experience of your life"
        subtitle=" Our team developed this platform for you , We know you are looking for     quality content , you will find it here."
        home // esto valua si es true o false
      />

      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
           <h2>Latest Posts</h2>
          {
            posts ?
            <div>
              {
                posts.map( p => <Publication
                title={p.title}
                author={p.author}
                date={p.date}
                content={p.content}
                key={p.title}
                />)
              }
            </div> 
            :  
            <p> There is not post right now</p> 
        
          }
      
        </div>
          <div>
            <h3>Categories List</h3>
            <ul className= "feature-list">
              <li><span>React.js</span></li>
              <li><span>Java</span></li>
              <li><span>HTML</span></li>
              <li><span>Python</span></li>
              <li><span>CSS</span></li>
              <li><span>Git</span></li>
            </ul>
          </div>
        </main>
  
    </>

  )
  
  
  
}

const mapStateToProps = state =>({

  posts: state.postReducer.posts

})

export default connect(mapStateToProps, {})(Home)
