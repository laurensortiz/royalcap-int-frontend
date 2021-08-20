import React from 'react'
import SlickSlider from '../UI/Carousel/slick'

const SliderData = [
  {
    id: 1,
    title: '<span>We are  </span>alizah <br> Business co.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dapibus enim sit amet pellentesque imperdiet nibh tortor fringilla tortor eu sodales leo augue eget justo. ',
    bg: 'slider1.jpg',
    btnText: 'Get A Quote',
    btnLink: '/contact',
  },
  {
    id: 2,
    title: '<span>We are  </span>alizah <br> Business co.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dapibus enim sit amet pellentesque imperdiet nibh tortor fringilla tortor eu sodales leo augue eget justo. ',
    bg: 'slider2.jpg',
    btnText: 'Contact Us',
    btnLink: '/contact',
  },
]

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

const Slider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div className="slides_wrapper slides_wrapper_v3" id="top">
      <div className="slider_home">
        <SlickSlider settings={settings}>
          {SliderData.map((item) => (
            <div className={`slider-${item.id}`} key={item.id}>
              <div
                className="single_slider"
                style={{ backgroundImage: `url('/assets/images/${item.bg}')` }}
              >
                <div className="slider_item_tb">
                  <div className="slider_item_tbcell">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6 col-sm-12">
                          <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  )
}

export default Slider
