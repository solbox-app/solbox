import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'

//WORK ON PRIVATE ROUTES TO CHANGE "/" TO GO TO LOGIN OR DASHBOARD ACCORDINGLY IF USER LOGGGED IN OR NOT.
//CHECK COOKIES

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  )
}

export default App;
