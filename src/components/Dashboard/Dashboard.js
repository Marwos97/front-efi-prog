import React from "react"
import { DashboardContainer } from "./Styled"
import List from ".././List"
import Actions from "../Actions"
import { DragDropContext } from "react-beautiful-dnd"

const Dashboard = ({ lists }) => {

  const onDragEnd = () => {
    
  }
  return (
    <DragDropContext>
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

export default Dashboard
