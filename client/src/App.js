import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { SessionsPage } from './pages/SessionsPage'
import SessionForm from './pages/SessionForm'
import { NavLogo } from './components/NavLogo'
import classnames from 'classnames';

const App = ({ store }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Provider store={store}>
      <Container className="w-75">
        <Nav tabs className="mb-4 d-flex align-items-center">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              My sessions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Add new session
            </NavLink>
          </NavItem>
          <NavLogo />
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <SessionsPage />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <SessionForm />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </Provider>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
