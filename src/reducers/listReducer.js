import { CONSTANTS } from "../actions"

const initialState = [
  {
    title: "Titulo de la lista",
    id: "asdasd",
    cards: ["card1", "card2", "card3"],
  },
  {
    title: "Titulo segundo lista",
    id: "Awebo",
    cards: ["asd", "asdw", "asd23"],
  },
]

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const list = {
        title: action.payload,
        cards: [],
        id: 2,
      }
      return [...state, list]

    case CONSTANTS.ADD_CARD:
      const card = {
        text: action.payload,
        id: 2,
      }

      const newState = state.map((list) => {
        if (list.id === action.payload.list_id) {
          return {
            ...list,
            cards: [...list.cards, card],
          }
        } else {
          return list
        }
      })
      return newState

    default:
      return state
  }
}

export default listReducer
