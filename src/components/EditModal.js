import React from 'react';
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useFormik } from 'formik'
import { editSession, sortField } from '../redux/actions'
import { FormReusable } from './FormReusable'

const EditModal = (props) => {
  const {
    item,
    modal,
    toggle
  } = props;

  const formatDate = () => {
    let parseDate = Date.parse(item.date)
    return new Date(parseDate).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric'})
  }

  const formik = useFormik({
    initialValues: {
      id: item.id,
      date: new Date(item.date).toLocaleDateString('en-CA'),
      type: item.type,
      distance: item.distance,
      comment: item.comment
    },
    onSubmit: (values) => {
      props.editSession(values)
    },
  })

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit session of {formatDate()}</ModalHeader>
        <ModalBody>
          <FormReusable formik={formik} toggle={toggle} trigger={'edit'}/>
        </ModalBody>
      </Modal>
    </div>
  )
}

const mapDispatchToProps = { editSession, sortField }

export default connect(null, mapDispatchToProps)(EditModal)