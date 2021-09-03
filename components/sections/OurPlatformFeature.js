import styled from 'styled-components'
import { Row, Col, Layout, Link, Markdown } from 'library'
import NextImage from 'components/elements/image'

const { Content } = Layout

const OurPlatformFeature = ({ data }) => {
  if (data) {
  }
  const { ourPlatform } = data

  return (
    <section className="about-section " id="platform">
      <Content>
        <Row justify="center">
          <Col xs={18}>
            <div className="about_list">
              <div className="base-header2">
                <h1>{ourPlatform.title}</h1>
              </div>
              {ourPlatform.description && (
                <div className="text-xl mb-6 text-xl-center">
                  <Markdown className="text-xl">{ourPlatform.description}</Markdown>
                </div>
              )}
              <ImageWrapper>
                <NextImage media={ourPlatform.img} />
              </ImageWrapper>
              <LinkWrapper>
                <Link href={ourPlatform.linkUrl} isButton={true} ghostPrimary>
                  {ourPlatform.linkText}
                </Link>
              </LinkWrapper>
            </div>
          </Col>
        </Row>
      </Content>
    </section>
  )
}

const LinkWrapper = styled.div`
  text-align: center;
`

const ImageWrapper = styled.div`
  margin: 40px 0;
`

export default OurPlatformFeature
