import React from "react"
import { Link } from "gatsby"
import logo from '../../images/logo.png'

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
          <li >
            {" "}
            <Link
              to="/"
              style={{
                padding: "20px",
                fontSize: "1rem",
                marginRight: "1rem",
                textAlign: "center",
                textDecoration: "none",
                color: "#ecebf1",
                fontFamily: "limelight",
              }}
            >
              {" "}
              HOME
            </Link>
          </li>
          
          <li s>
            <Link to="/" tyle={{
       width: "300px",
      }}>
            <img 
              src={logo} 
              alt="Vsolutions"
              
            />

            </Link>
          </li>
          <li >
            {" "}
            <Link
            style={{
                padding: "20px",
                fontSize: "1rem",
                marginRight: "1rem",
                textAlign: "center",
                textDecoration: "none",
                color: "#ecebf1",
                fontFamily: "limelight",
              }}
              to="/about"
            >
              {" "}
              About
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Header
