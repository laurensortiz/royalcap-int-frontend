import styled, { css } from 'styled-components'
import { Row, Col, Link, Markdown } from 'library'
import NextImage from 'components/elements/image'
import MediaPath from 'helpers/mediaPath'

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
    <ImageCol lg={12} bgColumn={MediaPath(data.bgColumn && data.bgColumn.url)}>
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
    <ImageCol lg={12} bgColumn={MediaPath(data.bgColumn && data.bgColumn.url)}>
      {data.imgColumn && (
        <div className={'img-responsive'}>
          <NextImage media={data.imgColumn} layout={'responsive'} />
        </div>
      )}
    </ImageCol>
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
    <Section
      className={`main-section ${data.bgClass || ''}`}
      isOneColumn={isOneColumn}
      bgSection={MediaPath(sectionData.bgSection && sectionData.bgSection.url)}
      bgPosition={sectionData.contentPosition}
    >
      <div className="container">
        <Row justify={'center'}>
          <Col xs={24} md={18}>
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

  @media screen and (min-width: ${(props) => props.theme.breakpoints.x}) {
    background: url(${(props) => props.bgSection}) no-repeat;
    background-position: top ${(props) => (props.bgPosition === 'left' ? 'right' : 'left')};
    background-size: cover;
    background-attachment: fixed;
    ${(props) =>
      props.bgSection &&
      css`
        .container {
          color: #fff;
          h2,
          h3 {
            color: #fff;
          }
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            top: 0;
            left: 0;
          }
        }
      `}
  }
`

const LinkWrapper = styled.div`
  padding: 15px 0;
`

export default SectionLayout
