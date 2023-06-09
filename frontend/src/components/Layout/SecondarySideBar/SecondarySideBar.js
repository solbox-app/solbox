import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {
    Container, Inner, UserAvatar,
} from './Elements'

const SecondarySideBar = () => {

  // GET USER CONTEXT TO DISPLAY CORRECT ICON

  return (
    <Container>
      <Inner>
        <UserAvatar>
          <Link to="/login">
            <BiLogInCircle />
          </Link>
        </UserAvatar>
      </Inner>
    </Container>
  )
}

export default SecondarySideBar