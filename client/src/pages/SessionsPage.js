import React from 'react'
import { Container } from 'reactstrap';
import SessionsList from '../components/SessionsList'

export const SessionsPage = () => {
  return (
    <Container>
      <h1 className="mb-4">Session list</h1>
      <SessionsList />
    </Container>
  )
}