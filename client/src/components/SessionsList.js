import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap';
import SessionItem from './SessionItem';

const SessionsList = ({sessions}) => {
  const items = sessions.map(item => <SessionItem item={item} key={item.id} />)
  
  return (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Distance</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </Table>
  )
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions
  }
}

export default connect(mapStateToProps, null)(SessionsList)