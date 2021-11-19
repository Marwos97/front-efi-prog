import React from "react"
import { connect } from "react-redux"
import Dashboard from "./components/Dashboard"

const App = (props) => {
  const { lists, dispatch } = props


  return (
    <div className="App">
      <Dashboard lists={lists} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  lists: state.lists,
})

export default connect(mapStateToProps)(App)
