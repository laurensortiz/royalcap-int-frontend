import styled from 'styled-components'
import { Row, Col, Link, Markdown } from 'library'
import InnerHTML from 'dangerously-set-html-content'

const EmbededCode = ({ data }) => {
    console.log(data);
  return (
    <Section className={`section ${data.bgClass || ''}`}>
        <div className="content">
            {data.Code.map( item => (
                <Row justify="center">
                    <Col>
                        <InnerHTML key={item.id} html={item.code} />
                    </Col>
                </Row>
            ))}
        </div>
    </Section>
  )
}

const LinkWrapper = styled.div`
  text-align: center;
  padding: 50px 0 0;
`

const Section = styled.section``

const Box = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 6px;

  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px;

  span {
    display: flex;
  }

  i {
    margin-right: 10px;
  }

  h4 {
    font-size: 0.875rem;
    line-height: 1.0625rem;
  }
`

export default EmbededCode
