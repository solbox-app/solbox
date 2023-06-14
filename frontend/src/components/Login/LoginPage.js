import Login from "./Login"
import { Navigate } from "react-router-dom"
import { GetUserContext } from "../../context/userContext"

const LoginPage = () => {

  const { user } = GetUserContext()

  if(user.isLogged) {
    return <Navigate to="/" replace />
  }

  return (
    <Login />
  )
}

export default LoginPage