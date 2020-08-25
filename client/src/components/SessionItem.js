import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { FiDelete, FiEdit2 } from 'react-icons/fi'
import { deleteSession } from '../redux/actions'

const SessionItem = ({deleteSession, ...props}) => {
  let {item} = props
  return (
    <tr>
      <th scope="row">{item.date}</th>
      <td>{item.type}</td>
      <td>{item.distance} km</td>
      <td>{item.comment}</td>
      <td>
        <Button color="link" className="p-0">
          <FiEdit2 />
        </Button>
        <Button onClick={() => deleteSession(item.id)} color="link" className="p-0">
          <FiDelete />
        </Button>
      </td>
    </tr>
  )
}

const mapDispatchToProps = {
  deleteSession
}

export default connect(null, mapDispatchToProps)(SessionItem)