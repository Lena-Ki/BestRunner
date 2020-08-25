import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap';
import SessionItem from './SessionItem';
import { sortField, filterField } from '../redux/actions'

const SessionsList = ({sortField, filterField, ...props}) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  let {sessions} = props
  const items = sessions.map(item => <SessionItem item={item} key={item.id} />)

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
                <DropdownItem tag="a" href="/blah">Cycling</DropdownItem>
                <DropdownItem tag="a" href="/blah">Jogging</DropdownItem>
                <DropdownItem tag="a" href="/blah">Skiing</DropdownItem>
                <DropdownItem tag="a" href="/blah">Walking</DropdownItem>
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
    sessions: state.sessions
  }
}

const mapDispatchToProps = {
  sortField,
  filterField
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsList)