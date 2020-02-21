import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import logo from '../img/logo.png'

const Header = () => {
  
  return (
    <header className={styleHeader.header}>
      <nav>
        <ul className={styleHeader.navList}>
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
