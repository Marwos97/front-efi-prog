import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store"
import { getAllList } from "./actions"
import AuthContextProvider from "./components/Context/AuthContext"

store.dispatch(getAllList)

ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById("root")
)
