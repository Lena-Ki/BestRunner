import React from 'react'
import { Container, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import { Formik } from 'formik'

export const CreateSession = () => {
  return (
    <Container>
      <h1>New Session</h1>
      <hr />

      <Formik
       initialValues={{ distance: '', date: '', type: '' }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <Form onSubmit={handleSubmit}>
        <Col sm={6}>
          <FormGroup>
            <Input
              type="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="select"
              name="select"
            >
              <option>Бег</option>
              <option>Лыжи</option>
              <option>Велосипед</option>
              <option>Ходьба</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              name="distance"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            />
          </FormGroup>
          <FormGroup>
              <Input
                type="textarea"
                name="text"
              />
          </FormGroup>
           {/* {errors.password && touched.password && errors.password} */}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
          </Col>
         </Form>
       )}
     </Formik>
    </Container>
  )
}