import SideBar from "../SideBar/SideBar"
import Center from './Center/Center'
import SecondarySideBar from "../SecondarySideBar/SecondarySideBar"
import { useUserContext } from "../../context/userContext"
import { useEffect } from "react"
import { redirect } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { 
  Container,
} from './Element'

const Dashboard = () => {

  const { user } = useUserContext()

  // if(!user.isLogged) {
  //   return <Navigate to="/login" replace />
  // }

  return (
    <Container>
      <SideBar />
      <Center />
      <SecondarySideBar />
    </Container>
  )
}

export default Dashboard