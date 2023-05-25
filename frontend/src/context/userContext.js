import { createContext, useContext, useState } from "react"

const UserCtx = createContext()
export const useUserContext = () => useContext(UserCtx)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({
        isLogged: false,
        role: '',
        email: '',
        name: '',
    })

    return (
        <UserCtx.Provider value={{ user, setUser }}>
            {children}
        </UserCtx.Provider>
    )
}

export default UserContext