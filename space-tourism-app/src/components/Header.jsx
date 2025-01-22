import React from 'react'
import logo from "../assets/shared/logo.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <div>
            <Link to="/"><img src={logo} alt='Space Tourism' title='Space Tourism' /></Link>
        </div>
    </header>
    </>
  )
}

export default Header