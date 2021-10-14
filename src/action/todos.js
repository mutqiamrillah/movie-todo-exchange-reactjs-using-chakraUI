import axios from "axios"
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  SET_COMPLETE,
  SET_TODO_LOADING,
} from "../constants"

const BASE_URL = "https://reqres.in/api/users"

export const setComplete = (id) => ({ type: SET_COMPLETE, payload: id })

export const getTodos = () => {
  return async (dispatch) => {
    const result = await axios.get(`${BASE_URL}`)
    console.log('result = ',result.data)
    dispatch({ type: GET_TODOS, payload: result.data.data })
  }
}

export const addTodo = (title) => {
  return async (dispatch) => {
    const body = {
      title,
      body: "bar",
      userId: 1,
    }
    const result = await axios.post(`${BASE_URL}/posts`, body)
    dispatch({ type: ADD_TODO, payload: result.data })
  }
}

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_TODO_LOADING, payload: id })
    await axios.delete(`${BASE_URL}/posts/${id}`)
    dispatch({ type: DELETE_TODO, payload: id })
  }
}
