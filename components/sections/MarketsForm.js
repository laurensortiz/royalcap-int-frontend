import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert, Button } from 'library'
import styled from 'styled-components'
import countryCodes from 'utils/countries.json'

const WebinarRegistrationForm = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const ContactSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    country: yup.string().required(),
    occupation: yup.string().required(),
    investmentAmount: yup.string().required(),
    market: yup.array().of(yup.string()).required(),
  })
  return (
    <Section className={`main-section ${data.bgClass || ''}`}>
      <div className="container">
        <Row justify={'center'}>
          <Col xs={24} md={18}>
            <div className="about_list">
              {/* Start: Heading */}
              {/*{data.title && (*/}
              {/*  <div className="base-header">*/}
              {/*    <h2>{data.title}</h2>*/}
              {/*  </div>*/}
              {/*)}*/}
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
              investmentAmount: '',
              market: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              console.log('[=====  values  =====>')
              console.log(values)
              console.log('<=====  /values  =====]')
              setLoading(true)

              try {
                setErrors({ api: null })
                setIsSuccess(false)
                setIsError(false)
                await fetchAPI('/markets-forms', {
                  method: 'POST',
                  body: JSON.stringify({
                    fullName: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    occupation: values.occupation,
                    investmentAmount: values.investmentAmount,
                    market: values.market.join(),
                  }),
                })

                await fetchAPI('/markets-forms/email', {
                  method: 'POST',
                  body: JSON.stringify({
                    fullName: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    occupation: values.occupation,
                    investmentAmount: values.investmentAmount,
                    market: values.market.join(),
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
            {({ errors, touched, isSubmitting, values }) => (
              <FormWrapper xs={24} sm={18}>
                <Form>
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
                          <option key={name} value={name}>
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
                      <Label>{data.investmentAmountPlaceholder}</Label>
                      <Field
                        as="select"
                        name="investmentAmount"
                        placeholder={data.investmentAmount}
                        className={`text-field ${
                          errors.investmentAmount && touched.investmentAmount && 'has-error'
                        }`}
                      >
                        <option value=""></option>
                        <option value="US$1,000 a US$10,000">US$1,000 - US$10,000</option>
                        <option value="US$10,000 a US$50,000">US$10,000 - US$50,000</option>
                        <option value="US$50,000 a US$500,000">US$50,000 - US$500,000</option>
                      </Field>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div id="checkbox-group">
                        <Label>{data.marketPlaceholder}</Label>
                      </div>
                      <CheckBoxGroup role="group" aria-labelledby="checkbox-group">
                        <label>
                          <Field type="checkbox" name="market" value="Forex" />
                          Forex
                        </label>
                        <label>
                          <Field type="checkbox" name="market" value="Commodities" />
                          Commodities
                        </label>
                        <label>
                          <Field type="checkbox" name="market" value="Stock" />
                          Stock
                        </label>
                        <label>
                          <Field type="checkbox" name="market" value="Bond" />
                          Bond
                        </label>
                        <label>
                          <Field
                            type="checkbox"
                            name="market"
                            value="Inversión de renta fija con un 3.%% de interes mensual"
                          />
                          {data.inversionFieldPlaceholder}
                        </label>
                      </CheckBoxGroup>
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
const CheckBoxGroup = styled.div`
  label {
    display: block;
    color: #fff;
  }

  input {
    margin-right: 10px;
  }
`
const Section = styled.section``

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
