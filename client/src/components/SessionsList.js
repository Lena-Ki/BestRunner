import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap';
import { SessionItem } from './SessionItem';
import { sortField } from '../redux/actions'

const SessionsList = (props) => {
  const items = props.sessions.map(item => <SessionItem item={item} key={item.id} />)
  return (
    <Table>
      <thead>
        <tr>
          <th onClick={props.sortField.bind(null, 'date')}>Date</th>
          <th>Type</th>
          <th onClick={props.sortField.bind(null, 'distance')}>Distance</th>
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

const mapDispatchToProps = {
  sortField
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsList)