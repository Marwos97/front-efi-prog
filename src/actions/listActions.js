import { CONSTANTS } from "../actions"
import axios from "axios"

const PATH = "/api/v1/list"

export const addList = (title) => async (dispatch) => {
  await axios.post(`${process.env.REACT_APP_KEY + PATH}`, {
    name: title,
  })
  try {
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: title,
    })
  } catch (e) {
    dispatch({
      type: CONSTANTS.ERROR_LIST_MODULE,
      payload: console.log(e),
    })
  }
}

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  }
}

const PATH_TASK = "/api/v1/task"

export const getAllList = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_KEY + PATH}`)
    res.data.map((list) => {
      list.tasks = []
    })
    dispatch({
      type: CONSTANTS.GET_ALL_LIST,
      payload: res.data,
    })
  } catch (e) {
    console.log("falle")
    dispatch({
      type: CONSTANTS.ERROR_LIST_MODULE,
      payload: console.log("error " + e),
    })
    return []
  }
}
