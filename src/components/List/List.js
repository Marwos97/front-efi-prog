import React from "react"
import { ListContainer, Title } from "./Styled"
import CardTask from "../Card"
import Actions from "../Actions"
import { Droppable } from "react-beautiful-dnd"

const List = ({ title, cards, list_id }) => {
  return (
    <Droppable droppableId={list_id}>
      {(provided) => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <Title>{title}</Title>
          {cards.map((card, index) => (
            <CardTask
              key={card.id}
              text={card.text}
              card_id={card.id}
              index={index}
            />
          ))}
          <Actions list_id={list_id} />
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  )
}

export default List
