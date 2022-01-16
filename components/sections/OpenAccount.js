import styled from 'styled-components'
import { Col, Link, Row } from 'library'

const OpenAccount = ({ data }) => {
  return (
    <Section>
      <div className="container py-12">
        <div className="base-header2">
          <h1>{data.Title}</h1>
        </div>
        <StepsContainer>
          {data.numberedColumn &&
            data.numberedColumn.map((step) => {
              return (
                <Step key={step.id}>
                  <div className="number">{step.Number}</div>
                  <div className="step-description">
                    <h3>{step.Name}</h3>
                    <p>{step.Description}</p>
                  </div>
                </Step>
              )
            })}
        </StepsContainer>
        <Row justify="center">
          <Col>
            <LinkWrapper>
              <Link href={data.buttonLink.url} isButton={true}>
                {data.buttonLink.text}
              </Link>
            </LinkWrapper>
          </Col>
        </Row>
      </div>
    </Section>
  )
}

const Section = styled.section``

const LinkWrapper = styled.div`
  text-align: center;
  padding: 50px 0 0;
`

const StepsContainer = styled.div`
  display: flex;
`

const Step = styled.div`
  width: 100%;

  .number {
    color: #29b672;
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .step-description {
    padding-top: 27px;
    padding-right: 25%;
    padding-left: 0;
    border-top: 1px dotted #29b672;
    position: relative;

    h3 {
      margin-bottom: 20px;
    }

    &:before {
      top: -11px;
      left: 0;
      content: '';
      display: block;
      z-index: 2;
      position: absolute;
      width: 22px;
      height: 22px;
      border-radius: 22px;
      background-color: #ced;
    }

    &:after {
      top: -5px;
      left: 6px;
      content: '';
      display: block;
      z-index: 3;
      position: absolute;
      background-color: #29b672;
      width: 10px;
      height: 10px;
      border-radius: 10px;
    }
  }
`

export default OpenAccount
