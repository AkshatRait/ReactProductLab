import { useState } from 'react'
import './App.css'
import {Route,Routes,Link} from "react-router-dom"
import Products from './Pages/Products'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> }/>
      <Route path="/About" element={<About />}/>
      <Route path="/Products" element={<Products />}/>
    </Routes>

<Footer />
    </>
  )
}

export default App
