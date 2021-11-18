import styled from "styled-components"
import Card from "@material-ui/core/Card"
import Textarea from "react-textarea-autosize"
import Button from "@material-ui/core/Button"
import { Close } from "@material-ui/icons"

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  width: 272px;
  padding-left: 10px;
`

export const Text = styled.p``

export const FormContainer = styled.div``

export const CardContainer = styled(Card)`
  over-flow: visible;
  min-height: 80px;
  min-width: 272px;
  padding: 6px 8px 2px;
`

export const TextAreaContainer = styled(Textarea)`
  resize: none;
  width: 100%;
  outline: none;
  border: none;
`

export const ButtonTitle = styled(Button)`
  color: white;
  background-color: green;
  margin-top: 8px;
`

export const IconClose = styled(Close)`
  margin-left: 8px;
`

export const ButtonsContainer = styled.div`
  margin-top: 8px;
  display: flex;
  aling-items: center;
`
