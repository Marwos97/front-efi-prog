import { CONSTANTS } from "../actions"
let list_id=4;
let card_id=6;

const initialState = [
  {
    title: "Titulo de la lista",
    id: `list-${0}`,
    cards: [
      
      {
        id: `card-${0}`,
        text: "dksmdksamdk"
      },
      {
        id: `card-${1}`,
        text: "dkmkmfdkfd"
      }
    
    ],
  },
  {
    title: "Titulo segundo lista",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "dkcaafrtrte"
      },
      {
        id: `card-${3}`,
        text: "paááekelam"
      }
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
      };
      list_id+=1;
      return [...state, newList]

    case CONSTANTS.ADD_CARD:{
      const newCard = {
        text: action.payload,
        id: `card-${card_id}`,
      };
      card_id +=1;
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
      return newState;

      }
      case CONSTANTS.DRAG_HAPPENED:

      const{
          droppableIdStart,
          droppableIdEnd,
          droppableIndexEnd,
          droppableIndexStart,
          draggableId
          
         } = action.payload;

          const newState = [...state];
          if (droppableIdStart === droppableIdEnd){
            const list = state.find(list=> droppableIdStart=== list.list_id)
            const card = list.cards.splice(droppableIndexStart,1)
            list.cards.splice(droppableIndexEnd,0 ,...card)
          }


          if (droppableIdStart !== droppableIdEnd){
            //encontrar la lista donde se dibuje
            const listStart = state.find(list=> droppableIdStart=== list.list_id)
           
            const card = listStart.cards.splice(droppableIndexStart, 1);

            const listEnd = state.find(list => droppableIdEnd === list.id);

            listEnd.cards.splice(droppableIndexEnd, 0, ...card)
        
          }

          //poner la card en otra lista

     

          return newState;
    default:
      return state
  }
}

export default listReducer
