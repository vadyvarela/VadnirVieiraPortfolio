import React from "react"
import { Link } from "gatsby"
import Logo from '../Logo'

const Header = () => {
  
  return (
    <header style={{
        display: "flex",
        justifyContent: "center",
        background: '#052049',
      }}>
      <nav>
        <ul style={{
        display: "flex",
        alignItems: "center",
        listStyle: "none",
      }}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          
          <li>
            <Link to="/" >
              <Logo/>
            </Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Header
