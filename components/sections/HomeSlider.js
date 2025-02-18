import React, { useEffect, useRef } from 'react'
import { Link, Markdown } from 'library'

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
            const isVideoSlider = item?.bg?.mime === 'video/mp4'
            const hasPoster = item?.videoBgPoster.url != ''
            return (
              <div className={`slider-${item.id}`} key={item.id}>
                <SingleSlider
                  className="single_slider"
                  imagePath={MediaPath(hasPoster ? item.videoBgPoster.url : null)}
                >
                  {isVideoSlider && (
                    <VideoSlider
                      src={MediaPath(item.bg.url)}
                      poster=""
                      autoPlay
                      muted
                      loop={true}
                      playbackRate="0.5"
                      ref={videoEl}
                      type="video/mp4"
                    />
                  )}
                  <SliderContent className="slider_item_tb">
                    <div className="slider_item_tbcell">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-sm-12">
                            <RichText>{item.title || ''}</RichText>
                            <RichText>{item.description || ''}</RichText>
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
                          {/* <div className="col-md-4 col-sm-12">
                            <NextImage media={data.HomeVideoURL} className="w-full h-auto" />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </SliderContent>
                </SingleSlider>
              </div>
            )
          })}
        </SlickSlider>
      </div>
    </div>
  )
}

const SliderContent = styled.div`
  text-align: left;

  h1 {
    font-size: 2.75rem;
    line-height: 3.375rem;
    color: #fff;
  }
`

const LinkWrapper = styled.div`
  font-size: 1rem;
  padding: 20px 0;
`

const SingleSlider = styled.div`
  position: relative;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    background-image: url(${(props) => props.imagePath});
    background-position: top ${(props) => (props.bgPosition === 'left' ? 'right' : 'left')};
    background-size: cover;
    background-repeat: no-repeat;

    video {
      display: none;
    }

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
            background: rgba(0, 0, 0, 0.9);
            top: 0;
            left: 0;
            z-index: 1;
          }
        }
      `}
  }

  .slider_item_tb {
    background-color: rgba(16, 19, 27, 0.6);
    position: absolute;
    z-index: 1;
    height: 100%;
  }

  h2 {
    font-size: 2.75rem;
    line-height: 3.375rem;
    font-weight: 400;
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
  p {
    font-size: 1.1875rem;
    line-height: 1.6875rem;

    span {
      color: inherit;
    }
  }
`

export default Slider
