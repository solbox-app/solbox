import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

    //TEMP
    const token = false

    return (
        token ?
        <Outlet /> : 
        <Navigate to="/login" />
    )
}

export default PrivateRoutes