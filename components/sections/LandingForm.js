import { useState } from 'react'
import { fetchAPI } from 'utils/api'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { Markdown, Row, Col, Alert, Button } from 'library'
import styled, { css } from 'styled-components'
import countryCodes from 'utils/countries.json'
import MediaPath from '../../helpers/mediaPath'

const LandingForm = ({ data }) => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const ContactSchema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    country: yup.string().required(),
    phone: yup.string().required(),
  })

  return (
    <Section
      className={`main-section ${data.bgClass || ''}`}
      bgSection={MediaPath(data.bgImage && data.bgImage.url)}
    >
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
              landingName: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setLoading(true)

              try {
                setErrors({ api: null })
                setIsSuccess(false)
                setIsError(false)
                await fetchAPI('/landing-forms', {
                  method: 'POST',
                  body: JSON.stringify({
                    name: values.name,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    landingName: data.landingName || '',
                  }),
                })

                await fetchAPI('/landing-forms/email', {
                  method: 'POST',
                  body: JSON.stringify({
                    name: values.name,
                    lastName: values.lastName,
                    email: values.email,
                    phone: values.phone,
                    country: values.country,
                    landingName: data.landingName || '',
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

const Section = styled.section`
  position: relative;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.s}) {
    background: url(${(props) => props.bgSection}) no-repeat;
    background-position: top ${(props) => (props.bgPosition === 'left' ? 'right' : 'left')};
    background-size: cover;
    background-attachment: fixed;

    ${(props) =>
      props.bgSection &&
      css`
        .container {
          color: #fff;

          h2,
          h3 {
            color: #fff;
          }

          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            top: 0;
            left: 0;
          }
        }
      `}
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
`

export default LandingForm
