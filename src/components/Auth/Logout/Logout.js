import Cookies from "universal-cookie"

const Logout = () => {
  const cookies = new Cookies()
  cookies.remove("api_token")
  window.location.href = "/login"
}

export default Logout
