import React from "react"
import { CardContent } from "@material-ui/core"
import { CardContainer, TypographyStyle } from "./Styled"
import { Draggable } from "react-beautiful-dnd"
import {DeleteOutlined,EditOutlined} from "@material-ui/icons"
import {
  ActionContainer,
  Text,
  FormContainer,
  CardContainer as CardContainerForm,
  TextAreaContainer,
  ButtonTitle,
  IconClose,
  ButtonsContainer,
} from "../Actions/Styled"

const CardTask = ({ text, card_id, index }) => {
  const updateCard = () => {}

  const DeleteCard = () => {
    
    if (text) {
      this.setState({
        text: "",
      })
      
    }
  }
  const handleClick = (text) => {
    console.log("awebo")

    return (
      <FormContainer>
        <CardContainer>
          <TextAreaContainer
            placeholder={text}
            autoFocus
            onBlur={"asd"}
            value={text}
            onChange={"asd"}
          />
        </CardContainer>
        <ButtonsContainer onMouseDown={"aasd"}>
          <ButtonTitle variant="contained">{"hola"} </ButtonTitle>
          <IconClose></IconClose>
        </ButtonsContainer>
      </FormContainer>
    )
  }

  return (
    <Draggable draggableId={String(card_id)} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContent onClick={handleClick}>
            <TypographyStyle gutterBottom>
              {text ? text : "no tengo texto aun"}
              <iconButton> <DeleteOutlined  /> </iconButton>
              <iconButton> <EditOutlined  /> </iconButton>
            </TypographyStyle>
          </CardContent>
        </CardContainer>
      )}
    </Draggable>
  )
}

export default CardTask
