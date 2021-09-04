import React, { useState, useEffect } from 'react'
import { animateScroll } from 'react-scroll'
import PropTypes from 'prop-types'
import { linkPropTypes, mediaPropTypes } from 'utils/types'
import styled from 'styled-components'
import { a } from 'react-router-dom'
import NextImage from 'components/elements/image'
import { Markdown } from 'library'

function ColumnContent({ title, children }) {
  return (
    <div className="widget">
      <h5>{title}</h5>
      {children}
    </div>
  )
}
const Footer = ({ footer, logo, contactInfo }) => {
  const [scroll, setScroll] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    setTop(100)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    animateScroll.scrollToTop()
  }

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <FooterWrapper className="footer-section">
      <div className="container">
        <div className="row">
          {/*  Start:About  */}
          <div className="col-lg-3 col-sm-12">
            <NextImage width="228" height="52" media={logo} />
            <ContactDetail>
              <Markdown>{contactInfo}</Markdown>
            </ContactDetail>
          </div>
          {/*  End:About  */}
          <div className="col-lg-9 col-sm-12">
            <div className="row">
              {/*  Start:Quick a  */}
              {footer.columns.map((column) => {
                return (
                  <div key={column.id} className="col-lg-4 col-sm-12">
                    <ColumnContent title={column.title}>
                      <ul classes="recent-post helpful_post">
                        {column.links.map((link) => (
                          <li key={link.id}>
                            <Anchor href={link.url}>{link.text}</Anchor>
                          </li>
                        ))}
                      </ul>
                    </ColumnContent>
                  </div>
                )
              })}
              {/*  End:Quick a  */}
            </div>
          </div>

          {/* Start:Newsletter  */}
          {/* <div className="col-lg-3 col-sm-12">
              <ColumnContent title="Subcribe now">
                <div className="news_letter_wrp">
                  <p>Subscribe our newsletter to get more update & join to Elizah </p>
                  <form className="footer_subs">
                    <input
                      className="form-input"
                      placeholder="Enter Your Email Address"
                      type="text"
                    />
                    <button type="submit" className="form-button"></button>
                  </form>
                </div>
              </ColumnContent>
            </div> */}
          {/*  End:Start Subscribe  */}
        </div>
        <div className="row">
          {/*  Start:Subfooter  */}
          <div className="subfooter">
            <div className="copyright_text">
              {' '}
              &copy; {new Date().getFullYear()} RC LTD. All rights reserved.{' '}
            </div>

            {/* SOCIAL ICON */}
            <div className="footer_social" style={{ display: 'none' }}>
              <ul className="footer_social_icons">
                <li>
                  {' '}
                  <a href="//facebook.com">
                    <i className="fa fa-facebook"></i>
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="//twitter.com">
                    <i className="fa fa-twitter"></i>
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="//instagram.com">
                    <i className="fa fa-instagram"></i>
                  </a>{' '}
                </li>
                <li>
                  {' '}
                  <a href="//pinterest.com">
                    <i className="fa fa-pinterest"></i>
                  </a>{' '}
                </li>
              </ul>
            </div>

            <button
              className={`scrollup ${scroll > top ? 'show' : ''}`}
              onClick={() => scrollToTop()}
            >
              <span className="arrow_triangle-up"></span>
            </button>
          </div>
          {/* End:Subfooter  */}
        </div>
      </div>
    </FooterWrapper>
  )
}

const ContactDetail = styled.div`
  color: #909aa8;
  margin-top: 25px;
  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`

const FooterWrapper = styled.div`
  float: left;
  width: 100%;
  color: #fff;
  background: ${(props) => props.theme.colors.gray010};
  padding-top: 42px;
  .footer_middle {
    padding-top: 42px;
  }

  .widget {
    padding-bottom: 25px;
  }

  .widget h5 {
    color: #fff;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 20px;
    margin-bottom: 26px;
  }

  .widget h3 {
    color: #fff;
    letter-spacing: 3px;
  }

  .widget p {
    color: #e6eceb;
    margin-top: 0px;
  }

  .recent-post {
    margin: 0;
    padding: 0;
  }

  .recent-post li {
    border-bottom: 1px solid #362d2d;
    list-style: none;
    margin: 0px 0px 14px 0;
    position: relative;
    padding-bottom: 14px;
  }

  .recent-post li:last-child {
    border-bottom: transparent;
  }

  footer .recent-post li a {
    color: #e6eceb;
    font-size: 14px;
  }

  footer .recent-post li a:hover {
    color: #e9dddd;
    text-decoration: underline;
  }

  footer .recent-post-date {
    position: absolute;
    width: 35px;
    height: auto;
    border: 1px solid #e9dddd;
    text-align: center;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 11px;
    padding: 8px;
    border-radius: 2px;
    left: 0;
    top: 5px;
  }

  .footer-social-links ul {
    margin-left: -39px;
  }

  .footer-social-links ul li {
    display: inline-block;
    position: relative;
    margin: 10px 5px 0;
    line-height: 1em;
    vertical-align: top;
  }

  .footer-social-links ul li a {
    display: inline-block;
    text-align: center;
    width: 46px;
    height: 46px;
    line-height: 46px;
    font-size: 21px;
    border: 1px solid #bababa;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    color: #bababa;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .footer_subs {
    position: relative;
  }

  .footer_sub_para {
    margin-bottom: 20px;
  }

  .footer_subs input {
    font-size: 14px;
    padding: 8px 22px;
    border: none;
    height: 45px;
    position: relative;
    border-radius: 25px;
    display: block;
    line-height: 1.428571429;
    color: #555;
    background-color: #fff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    outline: 0;
    width: 100%;
  }

  .footer_subs button {
    position: absolute;
    right: -2px;
    top: 0;
    height: 45px;
    border: none;
    background: #b89841;
    color: #fff;
    font-size: 0;
    padding: 10px 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .footer_subs button::after {
    content: '\\f1d8';
    font-family: FontAwesome;
    font-style: normal;
    font-weight: 400;
    text-decoration: inherit;
    color: #fff;
    font-size: 18px;
    padding-right: 0;
    position: absolute;
    top: 12px;
    left: 14px;
    transition: all 0.3s ease 0s;
  }

  .subfooter {
    float: left;
    width: 100%;
    padding: 20px 15px;
    border-top: 1px solid #362d2d;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .subfooter p {
    color: rgba(255, 255, 255, 0.94);
    float: left;
    margin-left: -12px;
    font-size: 13px;
  }

  .copyright_text {
    margin-top: 5px;
    color: #edf9f8;
  }

  .copyright_text a {
    color: #fff;
  }

  .footer_social_icons li i {
    color: #e6eceb;
  }

  .footer_social_icons li {
    float: left;
    padding-right: 20px;
    font-size: 18px;
    margin-top: 5px;
  }

  .footer_social_icons {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .scrollup {
    width: 35px;
    height: 35px;
    background-color: #b89841;
    border-radius: 6px;
    float: right;
    border: none;
    outline-style: none;
  }

  .scrollup span {
    font-size: 24px;
    line-height: 37px;
    color: #fff;
    outline: none;
    margin-left: -2px;
  }

  .scrollup:hover,
  .scrollup:active,
  .scrollup:focus {
    color: #ddd;
  }
`
const Anchor = styled.a`
  color: #fff;
  &:focus,
  &:active {
    color: #fff;
  }
`

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
