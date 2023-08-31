import { Navbar } from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
