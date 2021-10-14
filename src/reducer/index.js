import { combineReducers } from "redux"
import todos from "./todos"
import movie from "./movie"

const reducer = combineReducers({
  todos,
  movie
})

export default reducer
