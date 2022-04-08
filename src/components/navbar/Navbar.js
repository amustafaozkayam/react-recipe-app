
import React from 'react'
import { Nav, Logo, Hamburger, Menu, MenuLink } from './NavbarStyles'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo to='/'home>
        <i>{'<Clarusway>'}</i><span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span/>
          <span/>
          <span/>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to='/about'>About</MenuLink>
        <MenuLink to={{pathname: "https://github.com/amustafaozkayam"}}>Github</MenuLink>
        <MenuLink to='/login'>Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar