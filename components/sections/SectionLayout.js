import styled, { css } from 'styled-components'
import { Row, Col, Link, Markdown } from 'library'
import NextImage from 'components/elements/image'
import MediaPath from 'helpers/mediaPath'

const getLink = (ctaItem) => {
  const isFile = ctaItem.isFile || false
  const newTab = ctaItem.newTab || false
  const linkPath = isFile ? MediaPath(ctaItem.url) : ctaItem.url

  return (
    <LinkWrapper key={ctaItem.id}>
      <Link href={linkPath} isButton={true} target={newTab ? '_blank' : '_self'}>
        {ctaItem.text}
      </Link>
    </LinkWrapper>
  )
}

const ContentLeft = ({ data, cta }) => (
  <>
    <Col md={12}>
      <Markdown>{data.content}</Markdown>
      {cta && cta.map((ctaItem) => <LinkWrapper key={ctaItem.id}>{getLink(ctaItem)}</LinkWrapper>)}
    </Col>
    <ImageCol md={12} bgColumn={MediaPath(data.bgColumn && data.bgColumn.url)}>
      {data.imgColumn && (
        <div className={'img-responsive'}>
          <NextImage media={data.imgColumn} layout={'responsive'} />
        </div>
      )}
    </ImageCol>
  </>
)

const ContentRight = ({ data, cta }) => (
  <>
    <ImageCol md={12} bgColumn={MediaPath(data.bgColumn && data.bgColumn.url)}>
      {data.imgColumn && (
        <div className={'img-responsive'}>
          <NextImage media={data.imgColumn} layout={'responsive'} />
        </div>
      )}
    </ImageCol>
    <Col md={12}>
      <Markdown>{data.content}</Markdown>
      {cta && cta.map((ctaItem) => <LinkWrapper key={ctaItem.id}>{getLink(ctaItem)}</LinkWrapper>)}
    </Col>
  </>
)

const ContentCenter = ({ data, cta }) => (
  <Col xs={24}>
    <Markdown>{data.content}</Markdown>
    {cta && cta.map((ctaItem) => <LinkWrapper key={ctaItem.id}>{getLink(ctaItem)}</LinkWrapper>)}
  </Col>
)

const SectionLayout = ({ data }) => {
  const sectionData = data.SectionLayout
  const cta = data.cta
  const isOneColumn = data.isOneColumn || false
  const isHalfBg = data.isHalfBg || false
  const bgPosition = data.bgPosition || 'center'
  const isBgFixed = data.isBgFixed
  const titlePosition = data.titlePosition || 'center'

  return (
    <Section
      className={`main-section ${data.bgClass || ''}`}
      isOneColumn={isOneColumn}
      bgSection={MediaPath(sectionData.bgSection && sectionData.bgSection.url)}
      isHalfBg={isHalfBg}
      bgPosition={bgPosition}
      isBgFixed={isBgFixed}
    >
      <div className="container">
        <Row justify={titlePosition} gutter={[30, 30]}>
          <Col xs={24} md={12}>
            <div className="about_list">
              {/* Start: Heading */}
              {sectionData.title && (
                <div className="base-header">
                  <h2>{sectionData.title}</h2>
                  {sectionData.description && (
                    <div className="mb-6 text-justify">
                      <Markdown>{sectionData.description}</Markdown>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row gutter={[30, 30]}>
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

const ImageCol = styled(Col)`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.x}) {
    background: url(${(props) => props.bgColumn}) no-repeat;
    background-position: top ${(props) => (props.bgPosition === 'left' ? 'right' : 'left')};
    background-size: cover;

    ${(props) =>
      props.bgColumn &&
      css`
        min-height: 300px;
      `}
  }
`

const Section = styled.section`
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.isOneColumn &&
    css`
      padding-bottom: 0;
    `}

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    // background: url(${(props) => props.bgSection}) no-repeat;
    // background-position: top ${(props) => (props.bgPosition === 'left' ? 'right' : 'left')};
    // background-size: cover;
    // background-attachment: fixed;
    ${(props) =>
      props.bgSection &&
      css`
        min-height: 430px;
        &.black .container {
          color: #fff;
          h2,
          h3 {
            color: #fff;
          }
        }
      `}

    ${(props) =>
      props.isHalfBg &&
      css`
        position: relative;

        &:before {
          content: '';
          position: absolute;
          width: 50%;
          height: 100%;
          background: url(${(props) => props.bgSection}) no-repeat;
          background-attachment: ${(props) => (props.isBgFixed ? 'fixed' : 'initial')};
          background-size: ${(props) => (props.isBgFixed ? '100%' : 'cover')};
          top: 0;
          left: ${(props) => (props.bgPosition === 'left' ? 0 : '50%')};
          opacity: 0.6;
        }
      `}
  }
`

const LinkWrapper = styled.div`
  padding: 15px 0;
`

export default SectionLayout
