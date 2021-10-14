import axios from "axios"
import {
    GET_MOVIE,
    GET_TODOS,
    ADD_TODO,
    DELETE_TODO,
    SET_COMPLETE,
    SET_TODO_LOADING,
} from "../constants"

// const BASE_URL = "https://reqres.in/api/users"
const BASE_URL = "https://www.omdbapi.com/?s=guard&apikey=ae30b26b"


export const getMovie = () => {
  return async (dispatch) => {
    const result = await axios.get(`${BASE_URL}`)
    console.log('result = ',result.data)
    dispatch({ type: GET_MOVIE, payload: result.data.Search })
    // dispatch({ type: GET_TODOS, payload: result.data.data })
  }
}


