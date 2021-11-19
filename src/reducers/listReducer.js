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
        newState.push({
          id: action.payload[list].list_id,
          title: action.payload[list].name,
          cards: action.payload[list].tasks,
        })
      }
      // action.payload.map((list) => {
      //   console.log("las tasks: " + typeof list.tasks[0])
      //   newState.push({
      //     id: list.list_id,
      //     title: list.name,
      //     cards: list.tasks,
      //   })
      // })
      return newState
    }

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${card_id}`,
      }
      card_id += 1
      debugger
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

    case CONSTANTS.DRAG_HAPPENED: {
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
        const card = list.CardTask.splice(droppableIndexStart, 1)
        list.CardTask.splice(droppableIndexEnd, 0, ...card)
      }

      if (droppableIdStart !== droppableIdEnd) {
        //encontrar la lista donde se dibuje
        const listStart = state.find(
          (list) => droppableIdStart === list.list_id
        )

        //poner la card en otra lista
        const card = listStart.CardTask.splice(droppableIndexStart, 1)

        //encontrar la lista en el arrastre
        const listEnd = state.find((list) => droppableIdEnd === list.list_id)

        //poner la card en una lista nueva
        listEnd.CardTask.splice(droppableIndexEnd, 0, ...card)
      }

      return newState
    }

    case CONSTANTS.GET_ALL_TASK: {
      let newState = []
      console.log("el payload, " + action.payload)
      action.payload.map((list_task) => {
        console.log("awebo" + list_task.tasks)
        state.map((list) => {
          if (list_task.list_id === list.id) {
            let cards = []
            debugger
            for (let i in list_task.tasks) {
              debugger
              cards.push({
                id: list_task.tasks[i].task_id,
                text: list_task.tasks[i].title,
              })
            }
            list.cards = cards
          }
          newState.push(list)
        })
      })
      debugger
      return [...new Set(newState)]
    }

    default:
      return state
  }
}

export default listReducer
