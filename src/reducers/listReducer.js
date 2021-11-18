import { CONSTANTS } from "../actions"
let list_id = 4
let card_id = 6

const initialState = [
  {
    title: "Titulo de la lista",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "dksmdksamdk",
      },
      {
        id: `card-${1}`,
        text: "dkmkmfdkfd",
      },
    ],
  },
  {
    title: "Titulo segundo lista",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "dkcaafrtrte",
      },
      {
        id: `card-${3}`,
        text: "paááekelam",
      },
    ],
  },
]

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${list_id}`,
      }
      list_id += 1
      return [...state, newList]

    case CONSTANTS.GET_ALL_LIST: {
      let newState = []
      for (let list in action.payload) {
        console.log("get all asdasd", action.payload[list].tasks)
        const tareas = action.payload[list].tasks
        console.log("tareas: " + tareas)
        let all_cards = []
        for (let taskIndex in action.payload[list].tasks) {
          console.log("get all 1", action.payload[list].tasks[taskIndex])
          all_cards.push({
            id: action.payload[list].tasks[taskIndex].id,
            text: action.payload[list].tasks[taskIndex].text,
          })
        }
        console.log("all cards" + all_cards)
        newState.push({
          id: action.payload[list].list_id,
          title: action.payload[list].name,
          cards: action.payload[list].tasks,
        })
        console.log("lista en for: " + action.payload[list].tasks)
      }
      // action.payload.map((list) => {
      //   console.log("las tasks: " + typeof list.tasks[0])
      //   newState.push({
      //     id: list.list_id,
      //     title: list.name,
      //     cards: list.tasks,
      //   })
      // })
      return state
    }

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload,
        id: `card-${card_id}`,
      }
      card_id += 1
      const newState = state.map((list) => {
        if (list.id === action.payload.list_id) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          }
        } else {
          return list
        }
      })
      return newState
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
      } = action.payload

      const newState = [...state]
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.list_id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      if (droppableIdStart !== droppableIdEnd) {
        //encontrar la lista donde se dibuje
        const listStart = state.find(
          (list) => droppableIdStart === list.list_id
        )

        const card = listStart.cards.splice(droppableIndexStart, 1)

        const listEnd = state.find((list) => droppableIdEnd === list.id)

        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }

      //poner la card en otra lista

      return newState

    default:
      return state
  }
}

export default listReducer
