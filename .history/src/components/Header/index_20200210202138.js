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
          <li style={{
        padding: 20px;
        font-size: 1rem;
        margin-right: 1rem;
        text-align: center;
        text-decoration: none;
        color: #ecebf1;
        font-family: "limelight";
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
       width: 300px;
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
        padding: 20px;
        font-size: 1rem;
        margin-right: 1rem;
        text-align: center;
        text-decoration: none;
        color: #ecebf1;
        font-family: "limelight";
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
