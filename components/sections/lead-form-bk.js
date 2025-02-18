import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert, Button } from 'library'
import styled, { css } from 'styled-components'
import { ContainerOutlined } from '@ant-design/icons'
import MediaPath from '../../helpers/mediaPath'

const LeadForm = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const ContactSchema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    lastName: yup.string().required(),
  })

  return (
    <Section
      className={`main-section ${data.bgClass || 'black'}`}
      bgSection={MediaPath(data.bgSection && data.bgSection.url)}
      id={'newsletter'}
    >
      <div className="container">
        {isSuccess && (
          <Alert message={<Markdown>{data.successMessage}</Markdown>} type="success" showIcon />
        )}
        {isError && (
          <Alert message={<Markdown>{data.errorMessage}</Markdown>} type="error" showIcon />
        )}

        <Row gutter={[16, 16]} justify={'space-between'} align={'middle'}>
          <Col xs={24} md={24}>
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
          <Col xs={24} sm={24}>
            <Formik
              initialValues={{
                email: '',
                name: '',
                lastName: '',
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
                      name: values.name,
                      lastName: values.lastName,
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
                <Form className="lead-form">
                  <Row gutter={[16, 16]} align={'middle'}>
                    <Col xs={24} md={7}>
                      <Field
                        type="name"
                        name="name"
                        placeholder={data.namePlaceholder}
                        className={`text-field ${errors.name && touched.name && 'has-error'}`}
                      />
                    </Col>
                    <Col xs={24} md={7}>
                      <Field
                        type="lastName"
                        name="lastName"
                        placeholder={data.lastNamePlaceholder}
                        className={`text-field ${
                          errors.lastName && touched.lastName && 'has-error'
                        }`}
                      />
                    </Col>
                    <Col xs={24} md={7}>
                      <Field
                        type="email"
                        name="email"
                        placeholder={data.emailPlaceholder}
                        className={`text-field ${errors.email && touched.email && 'has-error'}`}
                      />
                    </Col>
                    <Col xs={24} md={3}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        button={data.submitButton}
                        disabled={isSubmitting || isSuccess}
                        loading={loading}
                        icon={<ContainerOutlined />}
                      >
                        {data.submitButton.text}
                      </Button>
                    </Col>
                    <Button
                      type="primary"
                      htmlType="submit"
                      button={data.submitButton}
                      disabled={isSubmitting || isSuccess}
                      loading={loading}
                      icon={<ContainerOutlined />}
                    >
                      {data.submitButton.text}
                    </Button>
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

  form.lead-form input {
    color: #000;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    // background: url(${(props) => props.bgSection}) no-repeat;
    // background-position: top ${(props) => (props.bgPosition === 'left' ? 'right' : 'left')};
    // background-size: cover;
    // background-attachment: fixed;
    ${(props) =>
      props.bgSection &&
      css`
        &.black .container {
          color: #fff;

          h2,
          h3 {
            color: #fff;
          }
        }

        position: relative;

        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: url(${(props) => props.bgSection}) no-repeat;
          background-attachment: fixed;
          background-size: cover;
          top: 0;
          left: 0;
          opacity: 0.1;
        }
      `}
  }
`

export default LeadForm
