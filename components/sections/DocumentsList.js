import styled from 'styled-components'
import { Row, Col, Link } from 'library'
import MediaPath from '../../helpers/mediaPath'

function handleClassFromOddOrEven(value) {
  return Number(value) % 2 == 0 ? 'white' : 'gray'
}

const DocumentsList = ({ data }) => {
  return (
    <Section
      className={`section ${data.bgClass || ''}`}
      bgSection={MediaPath(data.bgSection && data.bgSection.url)}
    >
      <div className="container text-left">
        <Row>
          <Col>
            <div className="base-header2">
              <Title>{data.title}</Title>
            </div>
          </Col>
        </Row>
        {data.documents.map((document) => {
          return (
            <Row gutter={[16, 16]} className={handleClassFromOddOrEven(document.id)}>
              <Col key={document.id} xs={24}>
                <Box>
                  <Col sm={20}>
                    <Anchor>
                      <Link href={document.linkUrl} target={'_blank'}>
                        <span className="stock-market-title">{document.title}</span>
                      </Link>
                    </Anchor>
                  </Col>
                  <Col sm={4}>
                    <span>{document.date}</span>
                  </Col>
                </Box>
              </Col>
            </Row>
          )
        })}

        {/* row */}
      </div>
      {/* container */}
    </Section>
  )
}

const Title = styled.div`
  margin-bottom: 35px;
  text-align: left;
  font-size: 2.75rem;
  line-height: 3.375rem;
  color: #031329;
  font-weight: 700;
`

const Anchor = styled.div`
  a {
    font-weight: 700;
    color: #1b73ee !important;

    &:hover {
      color: #105fcc !important;
      text-decoration: underline;
    }
  }
`

const Section = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 600px;

  .gray {
    background: rgba(242, 242, 245, 0.6);
  }
`

const Box = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  font-size: 1.1rem;
`

export default DocumentsList
