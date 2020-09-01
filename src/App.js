import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Container, TabContent, TabPane, Col, Alert } from 'reactstrap';
import { HeaderNav } from './components/HeaderNav'
import SessionsPage from './pages/SessionsPage'
import AddSessionPage from './pages/AddSessionPage'
import { fetchSessions, sortField } from './redux/actions';

const App = ({ store }) => {

  // declare tab state 
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  store.dispatch(fetchSessions());
  store.dispatch(sortField('date'));

  const detectMobile = () => {
    return (window.innerWidth <= 720 && window.innerHeight <= 600 );
  }

  return (
    <Provider store={store}>
    { detectMobile()
      ? <Container className="row mw-100 vh-100 m-0">
          <Alert color="info" className="m-auto">
            <span> please, run this website from desktop</span>
          </Alert>
        </Container>
      : <Container className="w-75">
          {/* header */}
          <HeaderNav toggle={toggle} activeTab={activeTab}/>

          {/* tab contents: SessionsPage & AddSessionPage */}
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Col sm="12">
                <SessionsPage />
              </Col>
            </TabPane>
            <TabPane tabId="2">
              <Col sm="12">
                <AddSessionPage />
              </Col>
            </TabPane>
          </TabContent>
        </Container>
      }
    </Provider>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
