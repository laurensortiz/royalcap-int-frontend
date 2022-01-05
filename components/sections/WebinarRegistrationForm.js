import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert, Button } from 'library'
import styled from 'styled-components'

const WebinarRegistrationForm = ({ data }) => {
    console.log('webinar registration form: ', data);
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const ContactSchema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().email().required(),
    country: yup.string().required(),
    occupation: yup.string().required(),
    isClient: yup.boolean(),
    username: yup.string(),
    terms: yup.boolean().required()
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
              isClient: false,
              username: '',
              terms: false
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
                    terms: values.terms
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
                      <Label>{data.fullNamePlaceholder}</Label>
                      <Field
                        type="fullname"
                        name="fullname"
                        placeholder={data.fullNamePlaceholder}
                        className={`text-field ${errors.fullname && touched.fullname && 'has-error'}`}
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
                      <Label>{data.occupationPlaceholder}</Label>
                      <Field
                        name="occupation"
                        placeholder={data.occupationPlaceholder}
                        className={`text-field ${
                          errors.occupation && touched.occupation && 'has-error'
                        }`}
                      />
                    </Col>
                  </Row>

                  <Row type="flex" align="middle">
                    <Col className="flex"  align="middle">
                        <Field
                            name="terms"
                            type="checkbox"
                            className="mr-2"
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

export default WebinarRegistrationForm
