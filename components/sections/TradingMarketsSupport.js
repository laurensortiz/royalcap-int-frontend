import styled from 'styled-components'
import { Row, Col } from 'library'
import {
  TeamOutlined,
  DollarCircleOutlined,
  FundViewOutlined,
  SafetyCertificateOutlined,
  LikeOutlined,
  MessageOutlined,
} from '@ant-design/icons'

const icon = (name) => {
  switch (name) {
    case 'TeamOutlined':
      return <TeamOutlined />
    case 'DollarCircleOutlined':
      return <DollarCircleOutlined />
    case 'FundViewOutlined':
      return <FundViewOutlined />
    case 'SafetyCertificateOutlined':
      return <SafetyCertificateOutlined />
    case 'LikeOutlined':
      return <LikeOutlined />
    case 'MessageOutlined':
      return <MessageOutlined />
  }
}

const TradingMarketsSupport = ({ data }) => {
  return (
    <Section>
      <div className="container py-12">
        <div className="base-header2">
          <h1>{data.Title}</h1>
        </div>
        <Row>
          {data.supportColumns.map((item) => {
            return (
              <Col sm={8}>
                <ItemContainer>
                  <Icon>{icon(item.icon)}</Icon>
                  <h3>{item.title}</h3>
                  <p>{item.Description}</p>
                </ItemContainer>
              </Col>
            )
          })}
        </Row>
      </div>
    </Section>
  )
}

const Section = styled.section``

const Icon = styled.div`
  font-size: 30px;
  color: #fff;
  background-color: #29b672;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  text-align: center;
  margin-bottom: 10px;
`

const ItemContainer = styled.div`
  padding: 15px;

  h3 {
    margin-bottom: 15px;
  }

  p {
    text-align: justify;
  }
`

export default TradingMarketsSupport
