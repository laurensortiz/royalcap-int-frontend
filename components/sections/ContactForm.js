import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert } from 'library'
import styled from 'styled-components'
import Button from '../elements/button'

const ContactForm = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [sendingStatus, setSendingStatus] = useState('')

  const ContactSchema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })

  return (
    <Section>
      <div className="container">
        <Row justify={'center'}>
          <Col xs={24} md={18}>
            <div className="about_list">
              {/* Start: Heading */}
              {data.title && (
                <div className="base-header">
                  <h2>{data.title}</h2>
                  {data.description && (
                    <div className="mb-6 text-justify">
                      <Markdown>{data.description}</Markdown>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Formik
            initialValues={{
              name: '',
              lastName: '',
              email: '',
              phone: '',
              country: '',
              message: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setLoading(true)

              try {
                setErrors({ api: null })
                await fetchAPI('/contact-forms', {
                  method: 'POST',
                  body: JSON.stringify({
                    name: values.name,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    category: values.category,
                    message: values.message,
                  }),
                })
              } catch (err) {
                setErrors({ api: err.message })
              }

              setLoading(false)
              setSubmitting(false)
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <div>
                <Form>
                  <Col xs={24} md={12}>
                    <Field type="name" name="name" placeholder={data.namePlaceholder} />
                  </Col>
                  <Col xs={24} md={12}>
                    <Field type="lastName" name="lastName" placeholder={data.lastNamePlaceholder} />
                  </Col>
                  <Col xs={24} md={12}>
                    <Field type="email" name="email" placeholder={data.emailPlaceholder} />
                  </Col>
                  <Col xs={24} md={12}>
                    <Field type="phone" name="phone" placeholder={data.phonePlaceholder} />
                  </Col>
                  <Col xs={24} md={12}>
                    <Field type="country" name="country" placeholder={data.countryPlaceholder} />
                  </Col>
                  <Col xs={24} md={12}>
                    {/*<Field type="category" name="category" placeholder={data.categoryPlaceholder} />*/}
                  </Col>
                  <Col xs={24}>
                    <Field type="message" name="message" placeholder={data.messagePlaceholder} />
                  </Col>
                  <Col>
                    <Button
                      type="submit"
                      button={data.submit}
                      disabled={isSubmitting}
                      loading={loading}
                    >
                      {data.submit.text}
                    </Button>
                  </Col>
                </Form>
                <p className="text-red-500 h-12 text-sm mt-1 ml-2 text-left">
                  {(errors.email && touched.email && errors.email) || errors.api}
                </p>
              </div>
            )}
          </Formik>
        </Row>
      </div>
    </Section>
  )
}

const Section = styled.section``

export default ContactForm
