import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import BlogPage from './components/Blog/BlogPage'
import LoginPage from './components/Login/LoginPage'
import UserContext from './context/userContext'

//WORK ON PRIVATE ROUTES TO CHANGE "/" TO GO TO LOGIN OR DASHBOARD ACCORDINGLY IF USER LOGGGED IN OR NOT.
//CHECK COOKIES

function App() {

  return (
    <UserContext>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </UserContext>
  )
}

export default App;
