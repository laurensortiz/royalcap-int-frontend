import React, { useEffect, useRef } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import { Row, Col, Layout, Link } from 'library'
import MediaPath from 'helpers/mediaPath'

const BrokerRegistrationFeature = ({ data }) => {
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
          <div className="container">
            <Row align="middle" justify="start">
              <Col xs={24} sm={15}>
                <div className="about_list">
                  <div className="base-header">
                    <h1>{data.title}</h1>
                  </div>
                  {data.description && (
                    <div className="text-xl mb-6 text-xl-center">
                      <RichText className="text-xl">{data.description}</RichText>
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
  text-align: left;

  .about_list {
    padding: 80px 0;
  }
`

const SingleSlider = styled.div`
  background: url(${(props) => props.imagePath}) no-repeat;
  background-size: cover;
  text-align: center;
  position: relative;
  width: 100%;
  height: 600px;
  color: #fff;

  .slider_data_tb {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 30px;
  }

  h1 {
    color: #fff;
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
  padding: 30px 0;
`

const RichText = styled(Markdown)`
  text-align: left;
  margin: 50px 0;
  span,
  strong {
    color: ${(props) => props.theme.colors.yellowb89};
  }
  p {
    font-size: 1rem;
    line-height: 1.8em;
    margin: 10px 0;
  }
`

export default BrokerRegistrationFeature
