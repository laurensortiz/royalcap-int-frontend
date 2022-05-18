import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert, Button } from 'library'
import styled from 'styled-components'
import countryCodes from '../../utils/countries.json'

const WebinarRegistrationForm = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const ContactSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    country: yup.string().required(),
    occupation: yup.string().required(),
    terms: yup.bool().oneOf([true], 'Requerido'),
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
              fullName: '',
              email: '',
              phone: '',
              country: '',
              occupation: '',
              isClient: '',
              username: '',
              terms: false,
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setLoading(true)

              try {
                setErrors({ api: null })
                setIsSuccess(false)
                setIsError(false)
                await fetchAPI('/webinar-registration-forms', {
                  method: 'POST',
                  body: JSON.stringify({
                    fullName: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    occupation: values.occupation,
                    isClient: values.isClient,
                    username: values.username,
                    terms: values.terms,
                  }),
                })

                await fetchAPI('/webinar-registration-forms/email', {
                  method: 'POST',
                  body: JSON.stringify({
                    fullName: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    occupation: values.occupation,
                    isClient: values.isClient,
                    username: values.username,
                    terms: values.terms,
                    to: '',
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
                <MainForm>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Label>{data.fullNamePlaceholder}</Label>
                      <Field
                        type="fullname"
                        name="fullName"
                        placeholder={data.fullNamePlaceholder}
                        className={`text-field ${
                          errors.fullName && touched.fullName && 'has-error'
                        }`}
                      />
                    </Col>
                    <Col xs={24} md={12}>
                      <Label>{data.emailPlaceholder}</Label>
                      <Field
                        type="email"
                        name="email"
                        placeholder={data.emailPlaceholder}
                        className={`text-field ${errors.email && touched.email && 'has-error'}`}
                      />
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Label>{data.phonePlaceholder}</Label>
                      <Field
                        type="phone"
                        name="phone"
                        placeholder={data.phonePlaceholder}
                        className={`text-field ${errors.phone && touched.phone && 'has-error'}`}
                      />
                    </Col>
                    <Col xs={24} md={12}>
                      <Label>{data.countryPlaceholder}</Label>
                      <Field
                        as="select"
                        type="country"
                        name="country"
                        placeholder={data.countryPlaceholder}
                        className={`text-field ${errors.country && touched.country && 'has-error'}`}
                      >
                        {countryCodes.countries.map(({ code, name }) => (
                          <option key={code} value={name}>
                            {name}
                          </option>
                        ))}
                      </Field>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Label>{data.occupationPlaceholder}</Label>
                      <Field
                        name="occupation"
                        placeholder={data.occupationPlaceholder}
                        className={`text-field ${
                          errors.occupation && touched.occupation && 'has-error'
                        }`}
                      />
                    </Col>
                    <Col xs={24} md={12}>
                      <Label>{data.isClientPlaceholder}</Label>
                      <Field
                        as="select"
                        name="isClient"
                        placeholder={data.isClientPlaceholder}
                        className={`text-field ${
                          errors.isClient && touched.isClient && 'has-error'
                        }`}
                      >
                        <option value=""></option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                      </Field>
                    </Col>
                  </Row>

                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Label>{data.usernamePlaceholder}</Label>
                      <Field
                        name="username"
                        placeholder={data.usernamePlaceholder}
                        className={`text-field ${
                          errors.username && touched.username && 'has-error'
                        }`}
                      />
                    </Col>
                  </Row>

                  <Row type="flex" align="middle">
                    <Col className="flex" align="middle">
                      <Field
                        name="terms"
                        type="checkbox"
                        className="mr-2"
                        style={{ alignSelf: 'center' }}
                      />
                      <Label>{data.terms}</Label>
                    </Col>
                  </Row>

                  <Row justify="center" className="mt-3">
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
                </MainForm>
              </FormWrapper>
            )}
          </Formik>
        </Row>

        {isSuccess && (
          <Alert message={<Markdown>{data.successMessage}</Markdown>} type="success" showIcon />
        )}
      </div>
    </Section>
  )
}

const Section = styled.section``

const MainForm = styled(Form)`
  input,
  select {
    color: #5a5a5a;
  }
`

const FormWrapper = styled(Col)`
  .ant-row {
    margin: 10px 0;
  }
`

const Label = styled.label`
  display: block;
  padding: 10px 0;
  color: #fff;
`

export default WebinarRegistrationForm
