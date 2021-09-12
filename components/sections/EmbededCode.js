import styled from 'styled-components'
import { Row, Col, Link, Markdown } from 'library'
import InnerHTML from 'dangerously-set-html-content'

const EmbededCode = ({ data }) => {
  return (
    <Section className={`section ${data.bgClass || ''} ${data.classname || ''}`}>
      <div className="content">
        {data.Code.map((item) => (
          <Row key={item.id} justify="center">
            <Col xs={24}>
              <InnerHTML key={item.id} html={item.code} />
            </Col>
          </Row>
        ))}
      </div>
    </Section>
  )
}

const Section = styled.section`
  &.no-padding {
    padding: 0;
  }
`

export default EmbededCode
