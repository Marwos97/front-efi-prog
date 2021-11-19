import axios from "axios"
import { CONSTANTS } from "../actions"

const PATH = "/api/v1/task"

export const addCard = async (list_id, text) => {
  axios.post(`${process.env.REACT_APP_KEY + PATH}`, )
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, list_id },
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
