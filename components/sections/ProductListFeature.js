import styled from 'styled-components'
import { Row, Col, Link, Markdown } from 'library'

const ProductListFeature = ({ data }) => {
  return (
    <Section className={`section ${data.bgClass || ''}`}>
      <div className="container text-left">
        <Row justify="center">
          <Col>
            <div className="base-header2">
              <h1>
                <small>{data.smallTitle}</small>
                {data.title}
              </h1>
            </div>
            {data.description && (
              <div className="text-xl mb-6">
                <Markdown className="description">{data.description}</Markdown>
              </div>
            )}
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {data.productListFeature.map((product) => {
            return (
              <Col key={product.id} xs={24} sm={12}>
                <Box>
                  <Link href={product.linkUrl}>
                    <span>
                      <i className={`stock-market-icon ${product.className}`}>
                        <span>{product.smallTitle}</span>
                      </i>
                      <h4 className="stock-market-title">{product.title}</h4>
                    </span>
                  </Link>
                </Box>
              </Col>
            )
          })}
        </Row>
        {data.linkUrl && (
          <Row justify="center">
            <Col>
              <LinkWrapper>
                <Link href={data.linkUrl} isButton={true} ghostPrimary>
                  {data.linkText}
                </Link>
              </LinkWrapper>
            </Col>
          </Row>
        )}

        {/* row */}
      </div>
      {/* container */}
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

export default ProductListFeature
