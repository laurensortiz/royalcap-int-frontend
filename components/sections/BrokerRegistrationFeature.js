import React, { useEffect, useRef } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import { Row, Col, Layout, Link } from 'library'
import MediaPath from 'helpers/mediaPath'

const { Content } = Layout

const BrokerRegistrationFeature = ({ data }) => {
  console.log('[=====  data ss =====>')
  console.log(data)
  console.log('<=====  /data  =====]')
  const isSliderImage = data.bg.mime === 'image/jpeg'
  const videoEl = useRef(null)

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  return (
    <Section className="about-section " id="platform">
      <SingleSlider imagePath={MediaPath(isSliderImage ? data.bg.url : null)}>
        {!isSliderImage && (
          <VideoSlider
            src={MediaPath(data.bg.url)}
            poster=""
            autoPlay
            muted
            loop={true}
            playbackRate="1"
            ref={videoEl}
          />
        )}
        <div className="slider_data_tb">
          <div className="slider_data_tbcell">
            <Content>
              <Row justify="center">
                <Col xs={18}>
                  <div className="about_list">
                    <div className="base-header2">
                      <h1>{data.title}</h1>
                    </div>
                    {data.description && (
                      <div className="text-xl mb-6 text-xl-center">
                        <Markdown className="text-xl">{data.description}</Markdown>
                      </div>
                    )}

                    <LinkWrapper>
                      <Link href={data.linkUrl} isButton={true} ghostPrimary>
                        {data.linkText}
                      </Link>
                    </LinkWrapper>
                  </div>
                </Col>
              </Row>
            </Content>
          </div>
        </div>
      </SingleSlider>
    </Section>
  )
}

const Section = styled.section`
  padding: 0;
  background-color: #000;
  overflow: hidden;
`

const SingleSlider = styled.div`
  background: url(${(props) => props.imagePath}) no-repeat;
  background-size: cover;
  text-align: center;
  position: relative;
  width: 100%;
  height: 600px;
  over

  .slider_data_tb {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 1;
    wi
  }

  h2 {
    font-size: 44px;
    line-height: 3.375rem;
  }
`

const VideoSlider = styled.video`
  position: absolute;
  width: 100vw;
  height: 120%;
  object-fit: cover;
  top: 0;
  left: 0;
  background-size: cover;
  opacity: 0.4;
  z-index: 0;
  background-color: #000;
`
const LinkWrapper = styled.div`
  text-align: center;
`

const RichText = styled(Markdown)`
  span,
  strong {
    color: ${(props) => props.theme.colors.yellowb89};
  }
  p {
    font-size: 1em;
    line-height: 1.8em;
  }
`

export default BrokerRegistrationFeature
