import React from "react"
import { Link } from "gatsby"
import logo from '../../images/logo.png'

const Header = () => {
  
  return (
    <header style={{
        display: flex,
        justifyContent: center,
        background: #052049,
      }}>
      <nav>
        <ul style={{
        display: flex,
        alignItems: center,
        listStyle-type: none,
      }}>
          <li style={{
        padding: 20px,
        fontSize: 1rem,
        marginRight: 1rem,
        textAlign: center,
        textDecoration: none,
        color: #ecebf1,
        fontFamily: "limelight",
      }}>
            {" "}
            <Link
              className={styleHeader.navItem}
              to="/"
            >
              {" "}
              HOME
            </Link>
          </li>
          
          <li style={{
       width: 300px,
      }}>
            <Link to="/">
            <img 
              className={styleHeader.Logoimg}
              src={logo} 
              alt="Vsolutions"
              
            />

            </Link>
          </li>
          <li style={{
        padding: 20px,
        fontSize: 1rem,
        marginRight: 1rem,
        textAlign: center,
        textDecoration: none,
        color: #ecebf1,
        fontFamily: "limelight",
      }}>
            {" "}
            <Link
              className={styleHeader.navItem}
              activeClassName={styleHeader.activeNavItem}
              to="/blog"
            >
              {" "}
              BLOG
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Header
