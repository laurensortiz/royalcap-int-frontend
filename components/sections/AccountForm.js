import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert, Button } from 'library'
import styled from 'styled-components'
import Link from 'next/link'
import countryCodes from 'utils/countries.json'

const AccountForm = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const ContactSchema = yup.object().shape({
    name: yup.string().required(),
    country: yup.string().required(),
    email: yup.string().email().required(),
    accountType: yup.string().required(),
    termsAndConditions: yup.bool().oneOf([true], 'Requerido'),
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
              email: '',
              country: '',
              phoneNumber: '',
              jobTitle: '',
              accountType: '',
              termsAndConditions: false,
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setLoading(true)

              try {
                setErrors({ api: null })
                setIsSuccess(false)
                setIsError(false)
                await fetchAPI('/account-forms', {
                  method: 'POST',
                  body: JSON.stringify({
                    name: values.name,
                    country: values.country,
                    phoneNumber: values.phoneNumber,
                    jobTitle: values.jobTitle,
                    email: values.email,
                    accountType: values.accountType,
                  }),
                })
                await fetchAPI('/account-forms/email', {
                  method: 'POST',
                  body: JSON.stringify({
                    name: values.name,
                    country: values.country,
                    phoneNumber: values.phoneNumber,
                    jobTitle: values.jobTitle,
                    email: values.email,
                    accountType: values.accountType,
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
                      <Label>{data.phoneNumberPlaceholder}</Label>
                      <Field
                        type="name"
                        name="phoneNumber"
                        placeholder={data.phoneNumberPlaceholder}
                        className={`text-field ${
                          errors.phoneNumber && touched.phoneNumber && 'has-error'
                        }`}
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
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </Field>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <Label>{data.jobTitlePlaceholder}</Label>
                      <Field
                        type="name"
                        name="jobTitle"
                        placeholder={data.jobTitlePlaceholder}
                        className={`text-field ${
                          errors.jobTitle && touched.jobTitle && 'has-error'
                        }`}
                      />
                    </Col>
                    <Col xs={24} md={12}>
                      <Label>{data.accountTypePlaceholder}</Label>
                      <Field
                        as="select"
                        name="accountType"
                        placeholder={data.accountTypePlaceholder}
                        className={`text-field ${
                          errors.accountType && touched.accountType && 'has-error'
                        }`}
                      >
                        <option value=""></option>
                        <option value="micro">Micro</option>
                        <option value="classic">Classic</option>
                        <option value="gold">Gold</option>
                        <option value="metaTrader">MetaTrader 5</option>
                        <option value="metaTrader_demo">MetaTrader 5 - DEMO</option>
                        <option value="rentaFija_3_5">Renta Fija 3.5%</option>
                        <option value="rentaFija_5">Renta Fija 5%</option>
                      </Field>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Link href={data.termsAndConditionLink || ''}>
                        <a target="_blank">{data.termsAndConditionsPlaceholder}</a>
                      </Link>

                      <Checkbox type="checkbox" name="termsAndConditions" />
                      <p className="error">
                        {errors.termsAndConditions &&
                          touched.termsAndConditions &&
                          errors.termsAndConditions}
                      </p>
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
        {isSuccess && (
          <Alert message={<Markdown>{data.successMessage}</Markdown>} type="success" showIcon />
        )}
        {isError && (
          <Alert message={<Markdown>{data.errorMessage}</Markdown>} type="error" showIcon />
        )}
      </div>
    </Section>
  )
}

const Section = styled.section``

const Checkbox = styled(Field)`
  margin-left: 10px;
`

const FormWrapper = styled(Col)`
  .ant-row {
    margin: 10px 0;
  }
`

const Label = styled.label`
  display: block;
  padding: 10px 0;
`

export default AccountForm
