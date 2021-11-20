import React, { useState } from "react"
import {
  ActionContainer,
  Text,
  FormContainer,
  CardContainer,
  TextAreaContainer,
  ButtonTitle,
  IconClose,
  ButtonsContainer,
} from "./Styled"
import { Add } from "@material-ui/icons"
import { connect } from "react-redux"
import { addList, addCard } from "../../actions"

class Actions extends React.Component {
  state = {
    form_open: false,
    text: "",
  }

  openForm = () => {
    this.setState({
      form_open: true,
    })
  }

  closeForm = () => {
    this.setState({
      form_open: false,
    })
  }
  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? "Agregar una nueva lista" : "Agregar otra tarea"
    const buttonOpacity = list ? 1 : 0.5
    const buttonColor = list ? "white" : "inherit"
    const buttonBackground = list ? "rgba(0,0,0,1.5)" : "inherit"

    return (
      <ActionContainer
        onClick={this.openForm}
        style={{
          opacity: buttonOpacity,
          color: buttonColor,
          backgroundColor: buttonBackground,
        }}
      >
        <Add>Agregar</Add>
        <Text>{buttonText}</Text>
      </ActionContainer>
    )
  }

  handleAddList = () => {
    const { dispatch } = this.props
    const { text } = this.state

    if (text) {
      this.setState({
        text: "",
      })
      dispatch(addList(text))
    }
    window.location.reload()
    return
  }

  handelAddCard = () => {
    const { dispatch, list_id } = this.props
    const { text } = this.state
    if (text) {
      this.setState({
        text: "",
      })
      dispatch(addCard(list_id, text))
    }
    return
  }

  renderForm = () => {
    const { list } = this.props

    const placeHolder = list
      ? "Ingrese el titulo de la lista"
      : "Ingrese el titulo de la tarea"

    const title = list ? "Agregar Lista" : "Agregar Tarea"

    return (
      <FormContainer>
        <CardContainer>
          <TextAreaContainer
            placeholder={placeHolder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </CardContainer>
        <ButtonsContainer
          onMouseDown={list ? this.handleAddList : this.handelAddCard}
        >
          <ButtonTitle variant="contained">{title} </ButtonTitle>
          <IconClose></IconClose>
        </ButtonsContainer>
      </FormContainer>
    )
  }

  render() {
    return this.state.form_open ? this.renderForm() : this.renderAddButton()
  }
}

export default connect()(Actions)
