import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { connect } from "react-redux"
import Dashboard from "./components/Dashboard"
import { useEffect } from "react"
import { getAllList } from "./actions"

const App = (props) => {
  const { dispatch, lists } = props

  useEffect(async () => {
    await dispatch(getAllList())
  }, [])

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
