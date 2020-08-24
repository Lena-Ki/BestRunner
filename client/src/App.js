import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import { UseRoutes } from './routes'

function App() {
  const routes = UseRoutes()
  return (
    <Router>
      <Container className="w-75">
        <Nav className="mb-4" tabs>
          <NavItem>
            <NavLink href="/sessions">
                Session List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/create">
                New session
            </NavLink>
          </NavItem>
        </Nav>
        {routes}
      </Container>
    </Router>
  );
}

export default App
