import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLogo } from './NavLogo'
import classnames from 'classnames';

export const HeaderNav = ({toggle, activeTab}) => {
  return (
    <Nav tabs className="mb-4 d-flex align-items-center">
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '1' })}
          onClick={() => { toggle('1') }}
        >
          My sessions
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '2' })}
          onClick={() => { toggle('2') }}
        >
          Add new session
        </NavLink>
      </NavItem>
      <NavLogo />
    </Nav>
  )
}