import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const Navbar = () => {
  return (
    <>
    <nav>
        <h1>Nav</h1>
        <Link to="/">
            <button>Home</button>
             </Link>
        <Link to="/about">  
            <button>About</button>
            </Link>
        <Link to="/products"> 
            <button>Products</button>
        </Link>
    </nav>
    </>
  )
}

export default Navbar