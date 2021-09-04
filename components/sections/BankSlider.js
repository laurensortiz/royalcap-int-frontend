import { Row, Col } from 'library'
import SlickSlider from '../UI/Carousel/slick'
import styled from 'styled-components'
import NextImage from '@/components/elements/image'

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
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1229,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <Section className="slides_wrapper slides_wrapper_v2">
      <div className="container2">
        <Row justify="center">
          <Col>
            <div className="base-header2">
              <h1>{data.title}</h1>
            </div>
          </Col>
        </Row>
        <SlickSliderContainer>
          <SlickSlider settings={settings}>
            {data.bank.map((item) => {
              return (
                <div className={`slider-${item.id}`} key={item.id}>
                  <NextImage height="30" media={item.logo} />
                </div>
              )
            })}
          </SlickSlider>
        </SlickSliderContainer>
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-color: #fff;
`

const SlickSliderContainer = styled.div`
  padding: 50px 0;
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    margin: 0 20px;
  }

  img {
    height: 50px !important;
    width: auto;
  }
`

export default Slider
