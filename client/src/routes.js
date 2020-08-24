import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SessionsForm from './pages/SessionForm'
import { EditSession } from './pages/EditSession'
import { SessionsPage } from './pages/SessionsPage'

export const UseRoutes = () => {
  return (
    <Switch>
      <Route path="/sessions">
        <SessionsPage />
      </Route>
      <Route path="/create">
        <SessionsForm />
      </Route>
      <Route path="/edit/:id">
        <EditSession />
      </Route>
      <Redirect to="/sessions" />
    </Switch>
  )
}