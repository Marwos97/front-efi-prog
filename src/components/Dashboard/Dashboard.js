import React from "react"
import { DashboardContainer } from "./Styled"
import List from ".././List"
import Actions from "../Actions"
import { DragDropContext } from "react-beautiful-dnd"
import { getAllTaskByList, sort } from "../../actions"
import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"

const Dashboard = ({ lists, dispatch }) => {
  useEffect(() => {
    dispatch(getAllTaskByList(lists))
  })

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    //  this.props.dispatch(
    sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
      // )
    )
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DashboardContainer>
        {lists.map((list) => (
          <List
            list_id={list.id}
            key={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
        <Actions list />
      </DashboardContainer>
    </DragDropContext>
  )
}

export default connect()(Dashboard)
