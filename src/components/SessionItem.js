import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { FiDelete, FiEdit2 } from 'react-icons/fi'
import { deleteSession } from '../redux/actions'
import EditModal from './EditModal'

const SessionItem = ({deleteSession, ...props}) => {
  let {item} = props
  
  const formatDate = () => {
    let parseDate = Date.parse(item.date)
    return new Date(parseDate).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric'})
  }

  // modal toggle function
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <tr>
      <td>{formatDate()}</td>
      <td>{item.type}</td>
      <td>{item.distance} km</td>
      <td className="text-break">{item.comment}</td>
      <td className="text-center">
        {/* edit button and modal */}
        <Button color="link" className="p-0 text-success">
          <FiEdit2 onClick={toggle}/>
        </Button>
        <EditModal modal={modal} toggle={toggle} item={item}/>
      </td>
      <td>
        {/* delete button */}
        <Button onClick={() => deleteSession(item.id)} color="link" className="p-0 text-dark">
          <FiDelete />
        </Button>
      </td>
    </tr>
  )
}

const mapDispatchToProps = { deleteSession }

export default connect(null, mapDispatchToProps)(SessionItem)