import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert, Button } from 'library'
import styled from 'styled-components'

const ContactForm = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const ContactSchema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    country: yup.string().required(),
    category: yup.string().required(),
  })

  return (
    <Section className={`main-section ${data.bgClass || ''}`}>
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
        {isSuccess && (
          <Alert message={<Markdown>{data.successMessage}</Markdown>} type="success" showIcon />
        )}
        {isError && (
          <Alert message={<Markdown>{data.errorMessage}</Markdown>} type="error" showIcon />
        )}

        <Row justify="center">
          <Formik
            initialValues={{
              name: '',
              lastName: '',
              email: '',
              phone: '',
              country: '',
              category: '',
              message: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setLoading(true)

              try {
                setErrors({ api: null })
                setIsSuccess(false)
                setIsError(false)
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
              <FormWrapper xs={24} sm={18}>
                <Form>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Label>{data.namePlaceholder}</Label>
                      <Field
                        type="name"
                        name="name"
                        placeholder={data.namePlaceholder}
                        className={`text-field ${errors.name && touched.name && 'has-error'}`}
                      />
                    </Col>
                    <Col xs={24} md={12}>
                      <Label>{data.lastNamePlaceholder}</Label>
                      <Field
                        type="lastName"
                        name="lastName"
                        placeholder={data.lastNamePlaceholder}
                        className={`text-field ${
                          errors.lastName && touched.lastName && 'has-error'
                        }`}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Label>{data.emailPlaceholder}</Label>
                      <Field
                        type="email"
                        name="email"
                        placeholder={data.emailPlaceholder}
                        className={`text-field ${errors.email && touched.email && 'has-error'}`}
                      />
                    </Col>
                    <Col xs={24} md={12}>
                      <Label>{data.phonePlaceholder}</Label>
                      <Field
                        type="phone"
                        name="phone"
                        placeholder={data.phonePlaceholder}
                        className={`text-field ${errors.phone && touched.phone && 'has-error'}`}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Label>{data.countryPlaceholder}</Label>
                      <Field
                        type="country"
                        name="country"
                        placeholder={data.countryPlaceholder}
                        className={`text-field ${errors.country && touched.country && 'has-error'}`}
                      />
                    </Col>
                    <Col xs={24} md={12}>
                      <Label>{data.categoryPlaceholder}</Label>
                      <Field
                        as="select"
                        name="category"
                        placeholder={data.categoryPlaceholder}
                        className={`text-field ${
                          errors.category && touched.category && 'has-error'
                        }`}
                      >
                        <option value=""></option>
                        <option value="Soporte">Soporte</option>
                        <option value="Pagos">Pagos</option>
                        <option value="Trading">Trading</option>
                        <option value="Cuentas">Cuentas</option>
                      </Field>
                    </Col>
                  </Row>
                  <Row>
                    <Label>{data.messagePlaceholder}</Label>
                    <Col xs={24}>
                      <Field
                        type="message"
                        name="message"
                        className={`text-field ${errors.message && touched.message && 'has-error'}`}
                        style={{ minHeight: 200 }}
                      />
                    </Col>
                  </Row>

                  <Row justify="center">
                    <Col>
                      <Button
                        type="submit"
                        htmlType="submit"
                        button={data.submit}
                        disabled={isSubmitting || isSuccess}
                        loading={loading}
                      >
                        {data.submit.text}
                      </Button>
                    </Col>
                  </Row>
                </Form>
                {/*<p className="error">*/}
                {/*  {(errors.email && touched.email && errors.email) || errors.api}*/}
                {/*</p>*/}
              </FormWrapper>
            )}
          </Formik>
        </Row>
      </div>
    </Section>
  )
}

const Section = styled.section``

const FormWrapper = styled(Col)`
  .ant-row {
    margin: 10px 0;
  }
`

const Label = styled.label`
  display: block;
  padding: 10px 0;
`

export default ContactForm
