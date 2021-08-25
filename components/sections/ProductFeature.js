import Link from 'next/link'
import styled from 'styled-components'
import { Row, Col, Layout } from 'library'
import { GoldOutlined, DollarCircleOutlined, SlidersOutlined } from '@ant-design/icons'

const { Content } = Layout

const icon = (name) => {
  switch (name) {
    case 'GoldOutlined':
      return <GoldOutlined />
    case 'DollarCircleOutlined':
      return <DollarCircleOutlined />
    case 'SlidersOutlined':
      return <SlidersOutlined />
  }
}

const ProductFeature = ({ data }) => {
  return (
    <ProductFeatureSection>
      <Content>
        <RowWrapper justify="center" gutter={[16, 24]} type="flux">
          {data.productFeature.map((productFeature) => (
            <ColWrapper key={productFeature.id} xs={20} md={5}>
              <Box>
                <Title>
                  {icon(productFeature.icon)} {productFeature.title}
                </Title>
                <Description>{productFeature.description}</Description>
                {productFeature.linkUrl && (
                  <ProductLink>
                    <Link href={productFeature.linkUrl}>{productFeature.linkText}</Link>
                  </ProductLink>
                )}
              </Box>
            </ColWrapper>
          ))}
        </RowWrapper>
      </Content>
    </ProductFeatureSection>
  )
}

const RowWrapper = styled(Row)``

const ColWrapper = styled(Col)`
  display: inline-flex;
  align-self: stretch;
`

const Title = styled.div`
  font-weight: 600;
  display: flex;

  .anticon {
    font-size: 20px;
    color: ${(props) => props.theme.colors.yellowb89};
    margin-right: 10px;
  }
`

const Box = styled.div`
  color: #fff;
  background-color: #1a1e2d;
  border-radius: 6px;
  padding: 30px 30px 60px;
  position: relative;
  font-weight: 400;
  font-size: 0.875rem;
`

const ProductLink = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`

const Description = styled.p`
  line-height: 1.25rem;
  color: #909aa8;
  margin: 10px 0;
`

const ProductFeatureSection = styled.div`
  margin-top: -100px;
  margin-bottom: 50px;
`

export default ProductFeature
