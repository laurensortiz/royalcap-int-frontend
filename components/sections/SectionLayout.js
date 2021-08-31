import styled, { css } from 'styled-components'
import { Row, Col, Link, Markdown } from 'library'
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

const ContentCenter = ({ data, cta }) => (
  <Col xs={24}>
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
)

const SectionLayout = ({ data }) => {
  const sectionData = data.SectionLayout
  const cta = data.cta
  const isOneColumn = data.isOneColumn || false

  return (
    <Section className={`main-section ${data.bgClass || ''}`} isOneColumn={isOneColumn}>
      <div className="container">
        <Row justify={'center'}>
          <Col xs={12}>
            <div className="about_list">
              {/* Start: Heading */}
              {sectionData.title && (
                <div className="base-header">
                  <h2>{sectionData.title}</h2>
                </div>
              )}
              {sectionData.description && (
                <div className="mb-6 text-justify">
                  <Markdown>{sectionData.description}</Markdown>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {isOneColumn ? (
            <ContentCenter data={sectionData} cta={cta} />
          ) : sectionData.contentPosition === 'left' ? (
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

const Section = styled.section`
  ${(props) =>
    props.isOneColumn &&
    css`
      padding-bottom: 0;
    `}
`

const LinkWrapper = styled.div`
  padding: 50px 0;
`

export default SectionLayout
