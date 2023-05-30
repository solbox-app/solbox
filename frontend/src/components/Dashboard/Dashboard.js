import { useUserContext } from "../../context/userContext"
import { useEffect } from "react"
// import { redirect } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Notification from "./Notification/Notification"
import Body from "./Body/Body"
import { Container } from './Element'

const Dashboard = () => {

  const { user } = useUserContext()

  // if(!user.isLogged) {
  //   return <Navigate to="/login" replace />
  // }

  return (
    <Container>
      <Notification />
      <Body />
    </Container>
  )
}

export default Dashboard