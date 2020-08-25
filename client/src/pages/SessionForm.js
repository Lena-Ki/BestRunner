import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { Container, Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap'
import { useFormik } from 'formik'
import { createSession } from '../redux/actions'
import {StyledInput} from '../components/StyledInput'


const StyledContainer = styled(Container)`
  max-width: 500px;
`

const SessionForm = (props) => {
  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString('en-CA'),
      type: 'jogging',
      distance: '',
      comment: ''
    },
    onSubmit: (values, {resetForm}) => {
      const newItem = {
        id: Date.now(),
        ...values,
      }
      props.createSession(newItem)
      resetForm({values: ''})
    },
  })

  return (
    <StyledContainer>
      <h1>New Session</h1>
      <hr />
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Row form>
            <Col md={5}>
              <Label for="date">Session date</Label>
              <Input
                id="date"
                type="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
            </Col>
            <Col md={7}>
              <Label for="type">Activity type</Label>
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
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Label for="date">Extra info</Label>
          <Input
            id="comment"
            type="textarea"
            name="comment"
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
        </FormGroup>
        <FormGroup className="d-flex justify-content-around">
          <Col sm={5}>
            <Label for="distance">Distance</Label>
            <StyledInput
              id="distance"
              type="number"
              step="0.1"
              min="0"
              name="distance"
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Button block outline color="success" type="submit">
            Add
          </Button>
        </FormGroup>
      </Form>
    </StyledContainer>
  )
}

const mapDispatchToProps = {
  createSession
}

export default connect(null, mapDispatchToProps)(SessionForm)