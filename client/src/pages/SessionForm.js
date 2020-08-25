import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { Container } from 'reactstrap'
import { useFormik } from 'formik'
import { createSession } from '../redux/actions'
import { NewForm } from '../components/NewForm'

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
      <NewForm formik={formik}/>
    </StyledContainer>
  )
}

const mapDispatchToProps = {
  createSession
}

export default connect(null, mapDispatchToProps)(SessionForm)