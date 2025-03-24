import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LogIn/LogIn'
import SignUpPage from './pages/SingUp/SingUp'
import HomePage from './pages/Home/Home'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    </>
  )
}

export default App
