import React from 'react'
import { connect } from 'react-redux'
import { Container, Alert } from 'reactstrap';
import SessionsList from '../components/SessionsList'

const SessionsPage = ({sessions}) => {
  const showMessage = () => {
    if (!sessions.length) {
      return (
        <Alert color="info">
          Add your first activity record
        </Alert>
      )
    }
  }

  return (
    <Container>
      <h1 className="mb-4">Session list</h1>
      <SessionsList />
      { showMessage() }
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions
  }
}

export default connect(mapStateToProps, null)(SessionsPage)