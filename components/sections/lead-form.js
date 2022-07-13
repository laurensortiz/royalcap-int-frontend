import { useState } from 'react'
import * as yup from 'yup'
import Link from 'next/link'

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

          <Col xs={24} md={24} style={{ textAlign: 'center' }}>
            <Link
              href="https://newsletters.tradingcentral.com/royalcapital/signup_widget.aspx"
              passHref={true}
            >
              <a target="_blank" rel="noreferrer">
                <LeadButton
                  type="primary"
                  loading={loading}
                  icon={<ContainerOutlined />}
                  onClick={() => {
                    console.log('ds')
                  }}
                  size={'large'}
                >
                  {data.submitButton.text}
                </LeadButton>
              </a>
            </Link>
          </Col>
        </Row>
      </div>
    </Section>
  )
}

const LeadButton = styled(Button)`
  width: 300px;
  height: 60px;
`

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
