import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { Container, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { UseRoutes } from './routes';

function App() {
  const routes = UseRoutes()
  return (
    <Router>
      <Container className="w-75">
        <Nav className="mb-4" tabs>
          <NavItem>
            <NavLink>
              Session List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
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
