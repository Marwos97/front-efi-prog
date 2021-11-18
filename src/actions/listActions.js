import { CONSTANTS } from "../actions"
import axios from "axios"
import { Droppable } from "react-beautiful-dnd"
import { CastRounded, ListSharp, Restaurant } from "@material-ui/icons"

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
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

const PATH = "/api/v1/list"
const PATH_TASK = "/api/v1/task"

export const getAllList = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_KEY + PATH}`)
    res.data.map(async (list) => {
      list.tasks = [{ id: "awebo", text: "asdasd" }]
      const res_task = await axios.get(
        `${process.env.REACT_APP_KEY + PATH_TASK}/list/${list.list_id}`
      )
      // for (const taskIndex in res_task.data.data) {
      //   console.log("task en actions: " + res_task.data.data[taskIndex].title)
      //   list.tasks.push({
      //     id: res_task.data.data[taskIndex].task_id,
      //     text: res_task.data.data[taskIndex].title,
      //   })
      // }
      // res_task.data.data.map((task) => {
      //   list.tasks.push({
      //     id: task.task_id,
      //     text: task.title,
      //   })
      // })
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
