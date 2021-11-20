import React, { createContext, useState, useEffect } from "react"
import Cookies from "universal-cookie"
import jwt_decode from "jwt-decode"

export default ({ children }) => {

  const cookies = new Cookies()

  let state_log = {}

  if (cookies.get("api_token")) {
    let jwt = jwt_decode(cookies.get("api_token"), "ALTACONTRAPAPA")
    console.log("this is jwt", jwt)
    state_log = {
      isAuthenticated: jwt.identity.id === undefined ? false : true,
      isAdmin: jwt.identity.is_admin,
      profile: jwt.identity.first_name ? jwt.identity.first_name : "",
      user_id: jwt.identity.id ? jwt.identity.id : "",
      email: jwt.identity.email ? jwt.identity.email : "",
    }
  }
  const [state, setState] = useState(state_log)

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthContext = createContext()