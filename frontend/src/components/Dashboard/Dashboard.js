import SideBar from "../SideBar/SideBar"
import Center from './Center/Center'
import SecondarySideBar from "../SecondarySideBar/SecondarySideBar"
import { 
  Container,
} from './Element'

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
      <Center />
      <SecondarySideBar />
    </Container>
  )
}

export default Dashboard