import styled from 'styled-components'
import { Row, Col, Markdown, Tabs } from 'library'
import { WindowsOutlined, AppleOutlined, AndroidOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

const iconStyles = { color: '#0170C7', fontSize: 24 }

const icon = (name) => {
  switch (name) {
    case 'WindowsOutlined':
      return <WindowsOutlined style={iconStyles} />
    case 'AppleOutlined':
      return <AppleOutlined style={iconStyles} />
    case 'AndroidOutlined':
      return <AndroidOutlined style={iconStyles} />
  }
}

const SectionFeatureColumns = ({ data }) => {
  return (
    <Section className={`section ${data.bgColor || ''}`}>
      <div className="container">
        <Row gutter={[16, 16]} justify={data.justify} align="top">
          <Col xs={24}>
            <div className="card-container">
              <Tabs type="card" centered={true}>
                {data.tabs.map((tab) => {
                  return (
                    <TabPane
                      tab={
                        <span>
                          {icon(tab.icon)}
                          {tab.title}
                        </span>
                      }
                      key={tab.id}
                    >
                      <Markdown>{tab.content}</Markdown>
                    </TabPane>
                  )
                })}
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  )
}

const Section = styled.section``

export default SectionFeatureColumns
