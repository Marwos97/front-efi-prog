import { CONSTANTS } from "../actions"
import axios from "axios"
import { Droppable } from "react-beautiful-dnd"

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  }
}

export const sort =(
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) =>{
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload:{
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId
    }
  }
}

const PATH = "/api/v1/list"
const PATH_TASK = "/api/v1/task"

export const getAllList = () => async (dispatch) => {
  try {
    let cards = []
    const res = await axios.get(`${process.env.REACT_APP_KEY + PATH}`)
    console.log("la data: " + res.data)
    for (var i = 0; i <= res.data.lenght; i++) {
      console.log("fijate si esta bien " + res.data[i])
    }
    const resTask = await axios.get(
      `${process.env.REACT_APP_KEY + PATH_TASK}/list`
    )
    dispatch({
      type: CONSTANTS.GET_ALL_LIST,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: CONSTANTS.ERROR_LIST_MODULE,
      payload: console.log(e),
    })
    return []
  }
}
