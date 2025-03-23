import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LogIn/LogIn'
import SingUp from './pages/SingUp/SingUp'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SingUp />}/>
      </Routes>
    </>
  )
}

export default App
