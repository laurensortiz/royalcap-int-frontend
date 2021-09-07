import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert, Button } from 'library'
import styled from 'styled-components'
import { ContainerOutlined } from '@ant-design/icons'

const LeadForm = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const ContactSchema = yup.object().shape({
    email: yup.string().email().required(),
  })

  return (
    <Section className={`main-section ${data.bgClass || 'black'}`}>
      <div className="container">
        {isSuccess && (
          <Alert message={<Markdown>{data.successMessage}</Markdown>} type="success" showIcon />
        )}
        {isError && (
          <Alert message={<Markdown>{data.errorMessage}</Markdown>} type="error" showIcon />
        )}

        <Row gutter={[16, 16]} justify={'space-between'} align={'middle'}>
          <Col xs={24} md={10}>
            <div className="about_list">
              {/* Start: Heading */}
              {data.title && (
                <div className="">
                  <h2>{data.title}</h2>
                  {data.description && (
                    <div className="text-justify">
                      <Markdown>{data.description}</Markdown>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Col>
          <Col xs={24} sm={10}>
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={ContactSchema}
              onSubmit={async (values, { setSubmitting, setErrors }) => {
                setLoading(true)

                try {
                  setErrors({ api: null })
                  setIsSuccess(false)
                  setIsError(false)
                  await fetchAPI('/lead-form-submissions', {
                    method: 'POST',
                    body: JSON.stringify({
                      email: values.email,
                    }),
                  })
                  setIsSuccess(true)
                } catch (err) {
                  setIsError(true)
                  setErrors({ api: err.message })
                }

                setLoading(false)
                setSubmitting(false)
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <Row gutter={[16, 16]} align={'middle'}>
                    <Col xs={24} md={17}>
                      <Field
                        type="email"
                        name="email"
                        placeholder={data.emailPlaceholder}
                        className={`text-field ${errors.email && touched.email && 'has-error'}`}
                      />
                    </Col>
                    <Col xs={24} md={7}>
                      <Button
                        type="submit"
                        htmlType="submit"
                        button={data.submitButton}
                        disabled={isSubmitting || isSuccess}
                        loading={loading}
                        icon={<ContainerOutlined />}
                      >
                        {data.submitButton.text}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding-top: 15px;
  padding-bottom: 15px;

  .text-field {
    padding: 7px 15px;
  }
`

export default LeadForm
