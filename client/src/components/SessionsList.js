import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
import SessionItem from './SessionItem';
import { sortField, filterField } from '../redux/actions'

const SessionsList = ({sortField, filterField, filter, ...props}) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  let {sessions} = props
  let items
  if (filter === 'all')
    items = sessions.map(item => <SessionItem item={item} key={item.id} />)
  else {
    items = sessions
            .filter(item => item.type === filter)
            .map(item => <SessionItem item={item} key={item.id} />)
  }

  return (
    <Table>
      <thead>
        <tr>
          <th onClick={sortField.bind(null, 'date')}>Date</th>
          <th>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle tag="a" className="text-dark p-0" caret>
                Activity
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" onClick={(e) => filterField(e.target.innerHTML.toLowerCase())}>All</DropdownItem>
                <DropdownItem tag="a" onClick={(e) => filterField(e.target.innerHTML.toLowerCase())}>Cycling</DropdownItem>
                <DropdownItem tag="a" onClick={(e) => filterField(e.target.innerHTML.toLowerCase())}>Jogging</DropdownItem>
                <DropdownItem tag="a" onClick={(e) => filterField(e.target.innerHTML.toLowerCase())}>Skiing</DropdownItem>
                <DropdownItem tag="a" onClick={(e) => filterField(e.target.innerHTML.toLowerCase())}>Walking</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </th>
          <th onClick={sortField.bind(null, 'distance')}>Distance</th>
          <th>Comment</th>
          <th>Edit</th>
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
    filter: state.filter,
    sessions: state.sessions
  }
}

const mapDispatchToProps = {
  sortField,
  filterField
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsList)