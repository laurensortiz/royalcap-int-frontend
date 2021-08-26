import React, { useEffect, useRef } from 'react'
import Markdown from 'react-markdown'
import { Link } from 'library'

import SlickSlider from '../UI/Carousel/slick'
import styled from 'styled-components'
import MediaPath from 'helpers/mediaPath'

const NextArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className="arrow_right" />
    </button>
  )
}

const PrevArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className="arrow_left" />
    </button>
  )
}

const Slider = ({ data }) => {
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

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1229,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="slides_wrapper slides_wrapper_v2">
      <div className="slider_home">
        <SlickSlider settings={settings}>
          {data.slider.map((item) => {
            const isSliderImage = item.bg.mime === 'image/jpeg'
            return (
              <div className={`slider-${item.id}`} key={item.id}>
                <SingleSlider
                  className="single_slider"
                  imagePath={MediaPath(isSliderImage ? item.bg.url : null)}
                >
                  {!isSliderImage && (
                    <VideoSlider
                      src={MediaPath(item.bg.url)}
                      poster=""
                      autoPlay
                      muted
                      loop={true}
                      playbackRate="0.5"
                      ref={videoEl}
                    />
                  )}
                  <div className="slider_item_tb">
                    <div className="slider_item_tbcell">
                      <div className="container">
                        <div className="row justify-content-md-center">
                          <div className="col-md-8 col-sm-12">
                            <RichText>{item.title}</RichText>
                            <RichText>{item.description}</RichText>
                            <div className="">
                              {item.btnLink && (
                                <LinkWrapper>
                                  <Link href={item.btnLink} isButton={true} ghost>
                                    {item.btnText}
                                  </Link>
                                </LinkWrapper>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SingleSlider>
              </div>
            )
          })}
        </SlickSlider>
      </div>
    </div>
  )
}

const LinkWrapper = styled.div`
  font-size: 1rem;
  padding: 20px 0;
`

const SingleSlider = styled.div`
  background: url(${(props) => props.imagePath}) no-repeat;
  background-size: cover;
  text-align: center;

  .slider_item_tb {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 1;
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
  opacity: 0.9;
  z-index: 0;
  background-color: #000;
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

export default Slider
