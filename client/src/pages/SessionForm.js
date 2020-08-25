import React from 'react'
import { connect } from 'react-redux'
import { Container, Form, FormGroup, Input, Col } from 'reactstrap'
import { useFormik } from 'formik'
import { createSession } from '../redux/actions'

const SessionForm = (props) => {
  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString('en-CA'),
      type: 'jogging',
      distance: '',
      comment: ''
    },
    onSubmit: values => {
      const newItem = {
        id: Date.now(),
        ...values,
      }
      props.createSession(newItem)
    },
  })

  return (
    <Container>
      <h1>New Session</h1>
      <hr />
      <Form onSubmit={formik.handleSubmit}>
        <Col sm={6}>
        <FormGroup>
          <Input
            id="date"
            type="date"
            name="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="type"
            type="select"
            name="type"
            onChange={formik.handleChange.bind(this)}
            value={formik.values.type}
          >
            <option value="jogging">Jogging</option>
            <option value="skiing">Skiing</option>
            <option value="cycling">Cycling</option>
            <option value="walking">Walking</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            id="distance"
            type="number"
            step="0.1"
            min="0"
            name="distance"
            onChange={formik.handleChange}
            value={formik.values.number}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="comment"
            type="textarea"
            name="comment"
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
        </FormGroup>
        <button type="submit">
          Submit
        </button>
        </Col>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = {
  createSession
}

export default connect(null, mapDispatchToProps)(SessionForm)