import React from 'react'
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap'
import {StyledInput} from './StyledInput'

export const FormReusable = (props) => {
  const {
    formik,
    toggle = null,
    trigger = 'new'
  } = props

  let button
  // create confirm button
  if (trigger === 'edit') {
    button = (
      <Button onClick={toggle} block outline color="success" type="submit">
      Edit
    </Button>
    )
  }
  else {
    button = (
      <Button block outline color="success" type="submit">
        Add
      </Button>
    )
  }

  return (
    <Form className="form" onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Row form>
          <Col md={5}>
            <Label for={trigger + "date"}>Session date</Label>
            <Input
              id={trigger + "date"}
              type="date"
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </Col>
          <Col md={7}>
            <Label for={trigger + "type"}>Activity type</Label>
            <Input
              id={trigger + "type"}
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
        <Label for={trigger + "comment"}>Extra info</Label>
        <Input
          id={trigger + "comment"}
          type="textarea"
          name="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}
        />
      </FormGroup>
      <FormGroup className="d-flex justify-content-around">
        <Col sm={5}>
          <Label for={trigger + "distance"}>Distance</Label>
          <StyledInput
            id={trigger + "distance"}
            type="number"
            required
            step="0.1"
            min="0"
            name="distance"
            placeholder="km"
            onChange={formik.handleChange}
            value={formik.values.distance}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        {button}
      </FormGroup>
    </Form>
  )
}