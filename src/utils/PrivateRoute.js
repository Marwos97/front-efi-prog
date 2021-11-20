import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = (props) =>
  props.isAuthenticated ? <Outlet /> : <Navigate to="/login" />

export default PrivateRoute
