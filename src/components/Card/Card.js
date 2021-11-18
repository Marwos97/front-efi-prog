import React from "react"
import { CardContent } from "@material-ui/core"
import { CardContainer, TypographyStyle } from "./Styled"
import { Draggable } from "react-beautiful-dnd"

const CardTask = ({ text, card_id, index }) => {
  return (
    <Draggable draggableId={card_id} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContent>
            <TypographyStyle gutterBottom>
              {text ? text : "no tengo texto aun"}
            </TypographyStyle>
          </CardContent>
        </CardContainer>
      )}
    </Draggable>
  )
}

export default CardTask
