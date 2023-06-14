import { Navigate, Outlet } from 'react-router-dom'
import { GetUserContext } from '../../context/userContext'

const PrivateRoutes = () => {

    const { user } = GetUserContext()

    return (
        user.isLogged ?
        <Outlet /> : 
        <Navigate to="/login" />
    )
}

export default PrivateRoutes