import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import { UseRoutes } from './routes'

const App = ({ store }) => {
  const routes = UseRoutes()
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
