import Axios from "axios"
import { GET_ALL_POSTS,GET_ALL_SPECIALITIES,GET_ALL_TEACHERS,GET_ALL_COURSES,GET_COURSE,GET_FRAGMENT,GET_POST,GET_SPECIALITY } from "./actions"

export const getAllPosts = () => dispatch => {

  Axios.get(`${process.env.REACT_APP_API_URL}/posts`).then(
    resp =>{
      return dispatch ({
        type : GET_ALL_POSTS ,
        posts : resp.data 
      })
    }
  )

}

export const getAllSpecialities = () => dispatch => {

  Axios.get(`${process.env.REACT_APP_API_URL}/especialidades`).then(
    resp =>{
      return dispatch ({
        type : GET_ALL_SPECIALITIES ,
        especialities : resp.data 
      })
    }
  )

}

export const getAllCourses = () => dispatch => {

  Axios.get(`${process.env.REACT_APP_API_URL}/cursos`).then(
    resp =>{
      return dispatch ({
        type : GET_ALL_COURSES ,
        cursos : resp.data 
      })
    }
  )

}

export const getAllTeachers = () => dispatch => {

  Axios.get(`${process.env.REACT_APP_API_URL}/profesores`).then(
    resp =>{
      return dispatch ({
        type : GET_ALL_TEACHERS ,
        teachers : resp.data 
      })
    }
  )

}


export const getPost = (id) => dispatch => {

  Axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`).then(
    resp =>{
      return dispatch ({
        type : GET_POST ,
        post : resp.data 
      })
    }
  )

}

export const getSpeciality = (id) => dispatch => {

  Axios.get(`${process.env.REACT_APP_API_URL}/especialidades/${id}`).then(
    resp =>{
      return dispatch ({
        type : GET_SPECIALITY ,
        speciality : resp.data 
      })
    }
  )

}

export const getCourse = (id) => dispatch => {

  Axios.get(`${process.env.REACT_APP_API_URL}/cursos/${id}`).then(
    resp =>{
      return dispatch ({
        type : GET_COURSE ,
        course : resp.data 
      })
    }
  )

}

export const getFragment = (id) => dispatch => {

  Axios.get(`${process.env.REACT_APP_API_URL}/clases/${id}`).then(
    resp =>{
      return dispatch ({
        type : GET_FRAGMENT ,
        fragment : resp.data 
      })
    }
  )

}

