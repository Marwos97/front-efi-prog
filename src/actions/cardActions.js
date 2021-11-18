import { CONSTANTS } from "../actions"

export const addCard = (list_id, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {text, list_id},
  }
}
