import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  SET_COMPLETE,
  SET_TODO_LOADING,
} from "../constants"

const initialState = []

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return action.payload.map((x) => ({
        ...x,
        completed: false,
        isLoading: false,
      }))
    case ADD_TODO:
      return [...state, action.payload]
    case DELETE_TODO:
      return state.filter((x) => x.id !== action.payload)
    case SET_COMPLETE:
      console.log(action.payload)
      return state.map((x) => {
        if (x.id === action.payload) {
          return {
            ...x,
            completed: !x.completed,
          }
        } else return x
      })
    case SET_TODO_LOADING:
      return state.map((x) => {
        if (x.id === action.payload) {
          return {
            ...x,
            isLoading: true,
          }
        } else return x
      })
    default:
      return state
  }
}

export default todosReducer
