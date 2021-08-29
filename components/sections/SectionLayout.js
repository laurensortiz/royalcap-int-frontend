import Markdown from 'react-markdown'
import styled from 'styled-components'
import { Row, Col, Link } from 'library'
import NextImage from 'components/elements/image'

const ContentLeft = ({ data, cta }) => (
  <>
    <Col lg={12}>
      <Markdown>{data.content}</Markdown>
      {cta &&
        cta.map((ctaItem) => (
          <LinkWrapper key={ctaItem.id}>
            <Link href={ctaItem.url} isButton={true}>
              {ctaItem.text}
            </Link>
          </LinkWrapper>
        ))}
    </Col>
    <Col lg={12}>
      {data.imgColumn && (
        <div className={'img-responsive'}>
          <NextImage media={data.imgColumn} layout={'fill'} />
        </div>
      )}
    </Col>
  </>
)

const ContentRight = ({ data, cta }) => (
  <>
    <Col lg={12}>
      {data.imgColumn && (
        <div className={'img-responsive'}>
          <NextImage media={data.imgColumn} layout={'intrinsic'} />
        </div>
      )}
    </Col>
    <Col lg={12}>
      <Markdown>{data.content}</Markdown>
      {cta &&
        cta.map((ctaItem) => (
          <LinkWrapper key={ctaItem.id}>
            <Link href={ctaItem.url} isButton={true}>
              {ctaItem.text}
            </Link>
          </LinkWrapper>
        ))}
    </Col>
  </>
)

const SectionLayout = ({ data }) => {
  const sectionData = data.SectionLayout
  const cta = data.cta
  return (
    <Section className="main-section">
      <div className="container">
        <Row justify={'center'}>
          <Col xs={12}>
            <div className="about_list">
              {/* Start: Heading */}
              <div className="base-header">
                <h2>{sectionData.title}</h2>
              </div>
              <div className="mb-6 text-justify">
                <RichText>{sectionData.description}</RichText>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {data.contentPosition === 'left' ? (
            <ContentLeft data={sectionData} cta={cta} />
          ) : (
            <ContentRight data={sectionData} cta={cta} />
          )}
        </Row>
        {/* row */}
      </div>
      {/* container */}
    </Section>
  )
}

const Section = styled.section``

const LinkWrapper = styled.div`
  padding: 50px 0;
`

const Icon = styled.span`
  color: red;
  font-size: 30px;
  margin-right: 10px;
`

const RichText = styled(Markdown)`
  p {
    font-size: 1em;
    line-height: 1.8em;
  }
`

export default SectionLayout
