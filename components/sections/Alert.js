import MediaPath from 'helpers/mediaPath'
import styled, { css } from 'styled-components'
import { Markdown, Alert, Row, Col } from 'library'

const AlertNotification = ({ data }) => {
  return data.alert ? (
    <Section className={`${data.alert.bgClass || ''}`}>
      <AlertWrapper className={`container`}>
        <Row>
          <Col>
            <AlertBase
              closable={data.alert.closable}
              showIcon={data.alert.showIcon}
              type={data.alert.type}
              message={data.alert.title}
              description={<Markdown>{data.alert.content}</Markdown>}
            />
          </Col>
        </Row>
      </AlertWrapper>
    </Section>
  ) : null
}

const Section = styled.section`
  padding-bottom: 20px;
  padding-top: 20px;
`
const AlertBase = styled(Alert)`
  padding: 20px;
`

const AlertWrapper = styled.div``

export default AlertNotification
