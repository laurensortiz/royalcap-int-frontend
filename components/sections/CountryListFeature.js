import styled, { css } from 'styled-components'
import { Row, Col, Link, Markdown } from 'library'
import NextImage from 'components/elements/image'
import MediaPath from '../../helpers/mediaPath'

const CountryListFeature = ({ data }) => {
  return (
    <Section
      className={`section ${data.bgClass || ''}`}
      bgSection={MediaPath(data.bgSection && data.bgSection.url)}
    >
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
          {data.countries.map((country) => {
            return (
              <Col key={country.id} xs={24} sm={12}>
                <Box>
                  <Link href={country.linkUrl}>
                    <span>
                      <i className={`flag-icon`}>
                        <NextImage
                          width={80}
                          height={80}
                          layout={'intrinsic'}
                          media={country.flag}
                        />
                      </i>
                      <h4 className="stock-market-title">{country.title}</h4>
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

const Box = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 6px;

  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px 30px;

  span {
    display: flex;
    align-items: center;
  }

  i {
    margin-right: 30px;
  }

  h4.stock-market-title {
    color: #333;
    font-size: 1.4rem;
    line-height: 1.0625rem;
  }
`

export default CountryListFeature
