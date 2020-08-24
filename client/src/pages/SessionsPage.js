import React from 'react'
import { Container, Button } from 'reactstrap';
import SessionsList from '../components/SessionsList'

// import { set } from 'mongoose';

export const SessionsPage = () => {
  return (
    <Container>
      <h1 className="mb-4">Session list</h1>
      <SessionsList />
      <Button outline color="secondary">add new</Button>{' '}
    </Container>
  )
}