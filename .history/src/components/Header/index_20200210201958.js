import React from "react"
import { Link } from "gatsby"
import logo from '../../images/logo.png'

const Header = () => {
  
  return (
    <header style={{
        display: flex;
        justify-content: center;
        background: #052049 ;
      }}>
      <nav>
        <ul style={{
        display: flex;
        align-items: center;
        list-style-type: none;
      }}>
          <li>
            {" "}
            <Link
              className={styleHeader.navItem}
              activeClassName={styleHeader.activeNavItem}
              to="/"
            >
              {" "}
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={styleHeader.navItem}
              activeClassName={styleHeader.activeNavItem}
              to="/about"
            >
              {" "}
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/">
            <img 
              className={styleHeader.Logoimg}
              src={logo} 
              alt="Vsolutions"
              
            />

            </Link>
          </li>
          <li>
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
          <li>
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
          <li>
            {" "}
            <Link
              className={styleHeader.navItem}
              activeClassName={styleHeader.activeNavItem}
              to="/contact"
            >
              {" "}
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
