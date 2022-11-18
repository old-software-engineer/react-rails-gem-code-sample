import React from 'react'
import { Icon, Nav } from './Layout.style'
// Render Navbar on Each page and
const Navbar = () => {
  return (
    <Nav className='navbar fixed-top navbar-expand-lg sticky-top navbar-dark bg-dark '>
      <div className='container-fluid'>
        <ul className='navbar-nav '>
          <div className='navbar-header'>
            <a className='navbar-brand' href='/'>
              <span style={{ paddingLeft: '100px' }}>Flights</span>
            </a>
          </div>
        </ul>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <a
              className='nav-link text-white '
              href='/'
            >
              <Icon className='fa fa-home' aria-hidden='true' />
              <span style={{ padding: '4px' }}>Home</span>
            </a>
          </li>
          <li className='nav-item '>
            <a
              className='nav-link text-white '
              rel='nofollow'
              data-method='delete'
              href='/users/sign_out'
            >
              <Icon className='fa fa-sign-out' aria-hidden='true' />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  )
}
export default Navbar
