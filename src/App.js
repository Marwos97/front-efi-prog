import React, { useEffect, useContext, Fragment } from "react"
import { connect } from "react-redux"
import Dashboard from "./components/Dashboard"
import SignInSide from "./components/Auth/Login"
import { getAllList } from "./actions"
import { AuthContext } from "./components/Context/AuthContext"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import PrivateRoute from "./utils/PrivateRoute"

const App = (props) => {
  const { lists, dispatch } = props
  const [state, setState] = useContext(AuthContext)

  useEffect(() => {
    dispatch(getAllList())
  })

  return (
    <BrowserRouter>
      <Fragment>
        <Layout>
          <Routes>
            {/* <Route exact path="/login" element={<SignInSide />} /> */}
            {/* <Route
              exact
              path="/"
              element={<PrivateRoute isAuthenticated={state.isAuthenticated} />}
            > */}
              <Route exact path="/" element={<Dashboard lists={lists} />} />
            {/* </Route> */}
          </Routes>
        </Layout>
      </Fragment>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  lists: state.lists,
})

export default connect(mapStateToProps)(App)
