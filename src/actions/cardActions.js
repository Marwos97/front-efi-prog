import axios from "axios"
import { CONSTANTS } from "../actions"

const PATH = "/api/v1/task"

export const addCard = (list_id, text) => async (dispatch) => {
  try {
    debugger
    await axios.post(`${process.env.REACT_APP_KEY + PATH}`, {
      list_id: list_id,
      title: text,
    })
    dispatch({
      type: CONSTANTS.ADD_CARD,
      payload: { text, list_id },
    })
  } catch (e) {
    console.log("Failed create task")
    dispatch({
      type: CONSTANTS.ERROR_TASK_MODULE,
      payload: console.log(e),
    })
  }
}

export const getAllTaskByList = (lists) => async (dispatch) => {
  try {
    let tasks = []
    for (let i in lists) {
      const list_id = lists[i].id
      const res_task = await axios.get(
        `${process.env.REACT_APP_KEY + PATH}/list/${list_id}`
      )
      debugger
      tasks.push({
        list_id,
        tasks: res_task.data.data,
      })
    }
    // lists.map(async (list) => {
    //   const list_id = list.id
    //   const res_task = await axios.get(
    //     `${process.env.REACT_APP_KEY + PATH}/list/${list_id}`
    //   )
    //   debugger
    //   tasks.push({
    //     list_id,
    //     tasks: res_task.data.data,
    //   })
    // })
    dispatch({
      type: CONSTANTS.GET_ALL_TASK,
      payload: tasks,
    })
  } catch (e) {
    console.log(`Failed get all task the `)
    dispatch({
      type: CONSTANTS.ERROR_TASK_MODULE,
      payload: console.log(e),
    })
  }
}

// export const editCard = (id, list_id, newText) => {
//   return {
//     type: CONSTANTS.EDIT_CARD,
//     payload: { id, list_id, newText }
//   };
// };

// export const deleteCard = (id, list_id) => {
//   return {
//     type: CONSTANTS.DELETE_CARD,
//     payload: { id, list_id }
//   };
// };
