import React from 'react'
import './../css/navbar.css'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link to='/'>
            <span>Safoah91</span>
            <small>repos</small>
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/'>Repositories</Link>
          </li>
          <li>
            <Link to='/error-boundary'>Error Boundary</Link>
          </li>
          <li>
            <a target='_blank' href="https://github.com/safoah91">
              <FaGithub size={30} />
            </a>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar