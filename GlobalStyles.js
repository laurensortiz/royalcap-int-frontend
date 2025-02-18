import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const fonts = css`
  @font-face {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`

const GlobalStyle = createGlobalStyle`${() => css`
  ${reset}
  ${fonts}

  :root {
    --font-normal: 'Titillium Web', sans-serif;
    --font-special: Trebuchet MS, sans-serif;
    --column-width: 275px;
    --app-menu-height: 72px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  strong {
    font-weight: bold;
  }

  /* Prevent iOS from automatically zooming in the website. */
  * {
    text-size-adjust: none;
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: initial;
    box-shadow: none;
  }

  .hasError.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
  .hasError.ant-input-affix-wrapper:focus,
  .hasError.ant-input-affix-wrapper-focused {
    border: 1px solid ${(props) => props.theme.colors.redab3};
  }

  body {
    font-size: 14px;
    font-family: var(--font-normal);
    line-height: 20px;
  }

  html {
    height: 100%;
  }

  body,
  #root {
    min-height: 100vh;
  }

  #root {
    width: 100%;
    margin: 0 auto;
  }

  body {
    font-size: 16px;
    font-family: 'Titillium Web', sans-serif;
    background: transparent;
    line-height: 1.5;
    font-weight: 400;
    color: #5a5a5a;
  }

  img {
    max-width: 100%;
  }

  a {
    -webkit-transition: all 0.4s ease-out 0s;
    -moz-transition: all 0.4s ease-out 0s;
    -ms-transition: all 0.4s ease-out 0s;
    -o-transition: all 0.4s ease-out 0s;
    transition: all 0.4s ease-out 0s;
  }

  table,
  .table {
    width: 100%;

    thead {
      background: #fff;
      font-weight: 600;
      border-radius: 6px;
      th {
        border: 0;
      }

      th:first-of-type {
        border-radius: 6px 0 0 6px;
      }

      th:last-of-type {
        border-radius: 0 6px 6px 0;
      }
    }

    tbody tr:first-of-type td {
      border: 0;
    }
  }

  figure.image-style-align-left {
    float: left;
    margin-right: 10px;
  }

  .bg-primary-600 {
    background-color: ${(props) => props.theme.colors.yellowb89};
  }

  .main-section {
    background-color: ${(props) => props.theme.colors.grayf2f};
  }

  .img-responsive {
    img {
      max-width: 100%;
    }
  }

  /* ## Global Class ## */

  p {
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
  }

  h1 {
    font-size: 30px;
    line-height: 40px;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    color: #333;
  }

  h5,
  h6 {
    line-height: 24px;
  }

  h2 {
    font-size: 2.125rem;
    line-height: 2.75rem;
  }

  h3 {
    font-size: 22px;
    line-height: 28px;
  }

  h4 {
    font-size: 18px;
    line-height: 26px;
    font-weight: 600;
  }

  h5 {
    font-size: 18px;
    font-weight: 600;
  }

  h6 {
    font-size: 13px;
  }

  a,
  a:hover,
  a:focus {
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
    -webkit-text-decoration: none;
    -moz-text-decoration: none;
    -ms-text-decoration: none;
    -o-text-decoration: none;
    text-decoration: none;
    outline: none;
    color: ${(props) => props.theme.colors.blue017};
  }

  a {
    color: ${(props) => props.theme.colors.blue017};

    &:focus {
      color: #fff;
    }
  }

  .btn.btn-fill {
    background: #fff;
  }

  .btn.btn-fill {
    color: #000;
  }

  .btn {
    border-width: 1px;
    border-style: solid;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -ms-border-radius: 0px;
    -o-border-radius: 0px;
    border-radius: 0px;
    cursor: pointer;
    padding: 10px 22px;
    display: inline-block;
    letter-spacing: 2px;
    position: relative;
    -webkit-transition: all 0.4s ease-out 0s;
    -moz-transition: all 0.4s ease-out 0s;
    -ms-transition: all 0.4s ease-out 0s;
    -o-transition: all 0.4s ease-out 0s;
    transition: all 0.4s ease-out 0s;
    color: #fff;
  }

  section {
    background: #fff;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .base-header {
    padding-bottom: 48px;
    width: 100%;
    margin: auto;
    text-align: center;
  }

  .base-header h3,
  .base-header h2,
  .base-header h1 {
    letter-spacing: 1px;
    position: relative;
    color: #212121;
    line-height: 32px;
    font-size: 2.125rem;
    line-height: 2.75rem;
  }

  .base-header h2 {
    font-size: 28px;
  }

  .base-header h3 {
    font-size: 20px;
  }

  //.base-header h3::after,
  //.base-header h2::after,
  //.base-header h1::after {
  //  position: absolute;
  //  content: '';
  //  background: #b89841;
  //  width: 100px;
  //  height: 2px;
  //  left: 50%;
  //  margin-left: -52px;
  //  bottom: 0;
  //  margin-bottom: -20px;
  //}

  .more-link:hover,
  .more-link:focus,
  .more-link:active {
    background: #b89841;
    color: #fff;
  }

  .more-link {
    display: inline-block;
    padding: 14px 30px;
    color: #fff;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    letter-spacing: 1px;
    border-radius: 50px;
    color: #333;
    border: 1px solid #b89841;
    text-transform: uppercase;
    font-weight: bold;
  }

  .owl-nav div {
    color: #fff;
    font-size: 50px;
    height: 40px;
    left: 25px;
    line-height: 35px;
    margin-top: -20px;
    opacity: 0.8;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 40px;
    border-radius: 20px;
  }

  .owl-nav div.owl-next {
    left: auto;
    right: 25px;
  }

  .owl-nav div:hover {
    color: #b89841;
  }

  /*---------------------------------------------------- 
  2. Header Section
  ------------------------------------------------------*/

  /* Start: HEADER TOP*/

  .header_top_area {
    min-height: 54px;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.colors.gray102};
    padding: 15px 10px;
    background: #10252e;
  }

  .header_top_area .row {
    justify-content: space-between;
    padding: 6px 15px;
    align-items: center;
  }

  .header_top_area .colm:nth-child(1) {
    margin-right: auto;
  }

  .header_wrapper_1 ul {
    padding: 0;
    margin: 0;
  }

  .header_wrapper_1 li {
    color: #fff;
    display: inline-block;
    font-size: 14px;
    margin-right: 20px;
    position: relative;
    top: -2px;
  }

  .header_wrapper_1 li i {
    margin-right: 9px;
  }

  /* Start: HEADER Social Icon*/

  .header_social {
    float: right;
  }

  .header_social a {
    color: #fff;
    font-size: 14px;
    margin-right: 15px;
    transition: 0.3s;
  }

  /* Start: HEADER Button*/

  .header_button a {
    background: #b89841;
    border-radius: 3px;
    color: #ffffff;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    padding: 14px 22px;
    position: relative;
    text-transform: uppercase;
    transform: perspective(1px) translateZ(0px);
    transition: color 0.3s ease 0s;
    vertical-align: middle;
    margin-left: 70px;
  }

  /*-----Logo-----*/

  .header_logo {
    float: left;
    margin-top: 16px;
    padding-right: 70px;
  }

  /*-----Navigationn-----*/

  .menu_area {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9999;
    box-shadow: 0 3px 6px rgba(54, 54, 54, 0.08);
  }

  .navigation {
    background-color: #fff;
    z-index: 999;
    position: relative;
  }

  .navigation .col-sm-12 {
    display: flex;
    justify-content: space-between;
  }

  #navigation,
  #navigation ul,
  #navigation ul li,
  #navigation ul li a,
  #navigation #menu-button {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    line-height: 1;
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
  }

  #navigation:after,
  #navigation > ul:after {
    content: '.';
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }

  #navigation #menu-button {
    display: none;
  }

  #navigation > ul > li {
    float: left;
  }

  #navigation.align-center > ul {
    font-size: 0;
    text-align: center;
  }

  #navigation.align-center > ul > li {
    display: inline-block;
    float: none;
  }

  #navigation.align-center ul ul {
    text-align: left;
  }

  #navigation.align-right > ul > li {
    float: right;
  }

  #navigation > ul > li > a {
    padding: 32px 0px 32px 37px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #333;
    margin-right: -1px;
    font-weight: 700;
  }

  #navigation > ul > li.menuItemHasChildren > a {
    padding: 32px 14px 32px 37px;
  }

  #navigation > ul > li.menuItemHasChildren > a::before {
    position: absolute;
    right: -1px;
    font-family: FontAwesome;
    content: '\\f107';
    transition: all 0.25s ease;
    margin-top: 1px;
  }

  #navigation ul ul li.menuItemHasChildren > a::before {
    position: absolute;
    top: 16px;
    right: 14px;
    display: block;
    content: '';
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    -ms-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease;
    content: '\\f105';
    font-family: FontAwesome;
  }

  #navigation > ul > li > .active {
    color: #b89841;
  }

  #navigation > ul > li:hover > a {
    color: #b89841;
  }

  #navigation ul ul {
    position: absolute;
    left: -9999px;
    top: 74px;
    background: #fff;
  }

  #navigation.align-right ul ul {
    text-align: right;
  }

  #navigation ul ul li {
    height: 0;
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    -ms-transition: all 0.25s ease;
    -o-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  #navigation li:hover > ul {
    left: auto;
  }

  #navigation.align-right li:hover > ul {
    left: auto;
    right: 0;
  }

  #navigation li:hover > ul > li {
    height: 43px;
  }

  #navigation ul ul ul {
    margin-left: 100%;
    top: 0;
  }

  #navigation.align-right ul ul ul {
    margin-left: 0;
    margin-right: 100%;
  }

  #navigation ul ul li a {
    padding: 14px 15px;
    width: 220px;
    text-decoration: none;
    color: #333;
    background: #fff;
    border-bottom: 1px solid #f8f3f3 !important;
  }

  #navigation ul ul li:last-child > a,
  #navigation ul ul li.last-item > a {
    border-bottom: 0;
  }

  #navigation ul ul li:hover > a,
  #navigation ul ul li a:hover {
    color: #fff;
    background: #b89841;
  }

  #navigation.small-screen {
    width: 100%;
  }

  #navigation.small-screen ul {
    width: 100%;
    display: none;
  }

  #navigation.small-screen.align-center > ul {
    text-align: left;
  }

  #navigation.small-screen ul li {
    width: 100%;
  }

  #navigation.small-screen ul ul li,
  #navigation.small-screen li:hover > ul > li {
    height: auto;
  }

  #navigation.small-screen ul li a,
  #navigation.small-screen ul ul li a {
    width: 100%;
    border-bottom: 0;
  }

  #navigation.small-screen > ul > li {
    float: none;
  }

  #navigation.small-screen ul ul li a {
    padding-left: 25px;
  }

  #navigation.small-screen ul ul ul li a {
    padding-left: 35px;
  }

  #navigation.small-screen ul ul li a {
    color: #333;
    background: none;
  }

  #navigation.small-screen ul ul li:hover > a,
  #navigation.small-screen ul ul li.active > a {
    color: #b89841;
  }

  #navigation.small-screen ul ul,
  #navigation.small-screen ul ul ul,
  #navigation.small-screen.align-right ul ul {
    position: relative;
    left: 0;
    width: 100%;
    margin: 0;
    text-align: left;
  }

  #navigation.small-screen > ul > li.menuItemHasChildren > a:after,
  #navigation.small-screen > ul > li.menuItemHasChildren > a:before,
  #navigation.small-screen ul ul > li.menuItemHasChildren > a:after,
  #navigation.small-screen ul ul > li.menuItemHasChildren > a:before {
    display: none;
  }

  #navigation.small-screen #menu-button {
    display: block;
    padding: 17px;
    color: #acc4ca;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
  }

  #navigation.small-screen #menu-button:after {
    position: absolute;
    top: 22px;
    right: 2px;
    display: block;
    height: 8px;
    width: 20px;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    content: '';
  }

  #navigation.small-screen #menu-button:before {
    position: absolute;
    top: 16px;
    right: 2px;
    display: block;
    height: 2px;
    width: 20px;
    background: #333;
    content: '';
  }

  #navigation.small-screen #menu-button.menu-opened:after {
    top: 23px;
    border: 0;
    height: 2px;
    width: 15px;
    background: #333;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #navigation.small-screen #menu-button.menu-opened:before {
    top: 23px;
    background: #333;
    width: 15px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #navigation.small-screen .submenu-button {
    position: absolute;
    z-index: 99;
    right: 0;
    top: 0;
    display: block;
    height: 46px;
    width: 46px;
    cursor: pointer;
  }

  #navigation.small-screen ul ul .submenu-button {
    height: 35px;
    width: 35px;
    top: 6px;
  }

  #navigation.small-screen .submenu-button:after {
    position: absolute;
    top: 20px;
    right: 19px;
    width: 8px;
    height: 2px;
    display: block;
    background: #333;
    content: '';
  }

  #navigation.small-screen ul ul .submenu-button:after {
    top: 16px;
    right: 13px;
  }

  #navigation.small-screen .submenu-button.submenu-opened:after {
    background: #333;
  }

  #navigation.small-screen .submenu-button:before {
    position: absolute;
    top: 17px;
    right: 22px;
    display: block;
    width: 2px;
    height: 8px;
    background: #333;
    content: '';
  }

  #navigation.small-screen ul ul .submenu-button:before {
    top: 13px;
    right: 16px;
  }

  #navigation.small-screen .submenu-button.submenu-opened:before {
    display: none;
  }

  #navigation.small-screen.select-list {
    padding: 5px;
  }

  /*-----Navigationn end-----*/
  /* Header Transparent CSS Start
  ----------------------------------------*/

  .header-transparent {
    padding-bottom: 20px;
  }

  .top-bar-transparent {
    margin-bottom: 20px;
  }

  .header-transparent #navigation {
    margin-top: 5px;
    background-color: transparent;
  }

  .header-transparent #navigation > ul > li > a {
    padding: 10px 4px;
    border: transparent;
    color: #fff;
  }

  .header-top {
    border-bottom: 1px solid transparent;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    border-color: rgba(250, 250, 250, 0.2);
  }

  .header-transparent #navigation li a {
    color: #ffffff;
    background-color: transparent;
    border-left: transparent;
    border-right: transparent;
    padding: 14px 30px 14px 10px;
  }

  .header-transparent #navigation li ul li a {
    background-color: #446a73;
    padding: 18px 20px;
  }

  .header-transparent #navigation > ul > li.menuItemHasChildren > a {
    padding-right: 30px;
  }

  .header-transparent #navigation li ul li a {
    border-bottom: 1px solid #375b63;
  }

  .header-top .top-nav ul li a {
    color: #fff;
  }

  .top-nav-collapse {
    background-color: rgba(18, 45, 52, 0.8);
  }

  #search-area-v2 {
    position: absolute;
    width: 100%;
    z-index: 1032;
    top: 48px;
  }

  #search-area-v2 .well-bg {
    background-color: #333;
  }

  .phone-img {
    margin-bottom: 60px;
  }

  /*Header Transparent CSS End 
  ----------------------------------------*/

  /*  3. Slider Section 
  ====================================*/

  .single_slider {
    background-color: #dddd;
    background-position: 50% 0px;
    background-size: cover;
    color: #fff;
    font-size: 24px;
    height: 800px;
  }

  .slider-1 .col-lg-6 {
    margin-left: 33%;
    margin-left: 50%;
  }

  .slider_item_tb {
    display: table;
    height: 100%;
    width: 100%;
  }

  .slider_item_tbcell {
    display: table-cell;
    vertical-align: middle;
  }

  .slides_wrapper h2 {
    font-size: 65px;
    margin-bottom: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 72px;
    color: #3f3c3c;
    position: relative;
    margin-top: -10px;
  }

  .slides_wrapper h2::after {
    position: absolute;
    content: '';
    width: 280px;
    height: 3px;
    background: #4a4949;
    bottom: -18px;
    left: 0;
  }

  .slides_wrapper h2 span {
    color: #b89841;
  }

  .slides_wrapper span {
    color: #b89841;
  }

  .single_slider p {
    color: #333;
    margin-top: 40px;
  }

  .slider_btn a {
    display: inline-block;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    margin-top: 20px;
    border-radius: 50px;
    padding: 14px 30px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .slider_btn_one {
    background: #b89841;
    color: #fff;
    margin-right: -6px;
  }

  .slider_btn_one:hover {
    background: #fff;
    color: #333;
  }

  .slides_wrapper {
    position: relative;
  }

  /*  Carousel   Nav  
    -------------------------------------*/

  .slides_wrapper .slick-arrow {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    z-index: 9;
  }

  .slider_home .slick-prev::before,
  .slider_home .slick-next::before {
    display: none;
  }

  .slides_wrapper .slick-arrow.slick-next {
    left: auto;
    right: 60px;
  }

  .slider_home .slick-arrow:hover i {
    background: #b89841;
  }

  .slider_home .slick-arrow i {
    font-size: 20px;
    line-height: 30px;
    padding: 15px 15px;
    border-radius: 50%;
    background-color: rgba(51, 51, 51, 0.67);
    color: #fff;
  }

  .slick-dots {
    display: flex !important;
    position: absolute;
    margin-top: 0;
    bottom: 37px;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
  }

  .slider_home .slick-dots li button {
    border: 2px solid transparent;
    background: transparent;
    border-radius: 14px;
    padding: 11px 24px;
    margin: 0px 0px;
    position: relative;
  }

  .slider_home .slick-dots li {
    position: relative;
    display: inline-block;
    width: 25px;
    height: 25px;
    margin: 0 13px;
    padding: 0;
    cursor: pointer;
  }

  .slider_home .slick-dots li button::before {
    position: absolute;
    width: 12px;
    height: 12px;
    content: '';
    opacity: 1;
    background: #333;
    border-radius: 50%;
    left: 19px;
    top: 5px;
  }

  .slider_home .slick-dots li.slick-active button {
    border: 2px solid #b89841;
    opacity: 1;
  }

  .slider_home .slick-dots li.slick-active button:before {
    background: #b89841;
    opacity: 1;
  }

  /*---------------------------------------------------- 
  4. About Section
  ------------------------------------------------------*/

  .about-section {
    background-color: #ffffff;
  }

  .about-section .base-header {
    text-align: left;
    padding-bottom: 10px;
  }

  .about-section .base-header h3,
  .about-section .base-header h1 {
    margin-top: 0px;
  }

  .about-section .base-header h3::after,
  .about-section .base-header h1::after {
    left: 54px;
  }

  /* About List */

  .about_list_warp {
    margin-top: 23px;
  }

  .about_short_des p {
    margin-bottom: 35px;
    margin-top: -15px;
  }

  .about_list {
    padding: 2px 0px;
  }

  .about_list .icon-fea {
    height: 46px;
    float: left;
  }

  .about_list .icon-fea::before {
    font-size: 32px;
    color: #b89841;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding: 10px;
    position: relative;
    top: 14px;
  }

  .about-section .about_list h5 {
    color: #1c1f25;
  }

  .about_list h5 {
    display: block;
    font-size: 20px;
    text-transform: capitalize;
    color: #1c1f25;
    margin: 0 auto;
    margin-left: auto;
    padding: 4px 0px;
    margin-left: 73px;
    font-weight: 600;
  }

  .about_para {
    margin-top: 25px;
    margin-bottom: 20px;
    text-align: left;
  }

  /*---------------------------------------------------- 
  5. Service Section
  ------------------------------------------------------*/

  .service_section {
    padding-top: 60px;
    padding-bottom: 70px;
    background: #f6f8fa;
  }

  .service_section .col {
    padding: 0px;
  }

  .service_list {
    border-bottom: 2px solid #eae4e4;
    overflow: hidden;
    margin-bottom: 30px;
    transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
  }

  .service_list:hover {
    border-bottom: 2px solid #333;
  }

  .service_list:hover h5 {
    color: #b89841;
  }

  .service_list:hover i {
    color: #b89841;
  }

  .service_img {
    position: relative;
  }

  .service_img::after {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2f2e2e;
    content: '';
    bottom: 0;
    opacity: 0;
  }

  .service_list:hover .service_img::before {
    bottom: -10px;
    transform: none;
  }

  .service_list:hover .service_img::after {
    opacity: 0.5;
  }

  .service_img img {
    width: 100%;
    height: 100%;
  }

  .service_para i {
    border: 1px dotted #bfb4b4;
    padding: 10px;
    color: #333;
    font-size: 32px;
  }

  .service_para h5 {
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #1c1f25;
    display: inline-block;
    margin-left: 20px;
    position: relative;
    top: -8px;
  }

  .service_para {
    padding: 35px 0px 25px 1px;
  }

  .srvic_read a {
    letter-spacing: 2px;
    font-size: 14px;
    text-transform: capitalize;
    color: #444;
  }

  .srvic_read a:hover {
    letter-spacing: 3px;
  }

  /*---------------------------------------------------- 
  6. why choos section
  ------------------------------------------------------*/

  .why_choos_section {
    padding-top: 100px;
    padding-bottom: 34px;
  }

  .why_choos_section .why_chs_box h5 {
    text-align: left;
    margin-top: 0px;
    font-size: 20px;
  }

  .why_chs {
    flex: 0 0 70%;
    max-width: 70%;
  }

  .why_chs .base-header h3 {
    text-align: left;
    margin-top: 0px;
  }

  .why_chs .base-header h3::after {
    left: 52px;
  }

  .why_chs_box {
    margin-bottom: 50px;
    padding-left: 0;
    padding-right: 30px;
    float: left;
  }

  .why_chs_box .why_chs_icon {
    font-size: 30px;
    color: #0c1239;
    text-align: center;
  }

  .why_chs_box h5,
  .why_chs_box .why_chs_desc {
    padding-left: 75px;
  }

  .why_chs_desc p {
    margin-top: -20px;
  }

  .why_chs_box .why_chs_desc {
    position: relative;
    z-index: 10;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .why_chs_box .why_chs_icon {
    float: left;
  }

  .why_chs_box .why_chs_icon {
    font-size: 32px;
    color: #b89841;
    text-align: center;
    border: 1px dashed #bfb4b4;
    position: relative;
    z-index: 99;
    padding: 10px;
    line-height: 0;
  }

  /*---------------------------------------------------- 
  7. Video Section
  ------------------------------------------------------*/

  #video {
    padding: 130px 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    height: 506px;
    position: relative;
  }

  .video-section .base-header {
    color: #fff;
  }

  #video .base-header h2,
  #video .base-header p {
    color: #fff;
  }

  #video .main-head,
  .separator {
    color: #fff;
  }

  #video .separator,
  #video .separator2 {
    background-color: #fff;
  }

  #video .section-subheading {
    margin-top: -15px;
    font-size: 15px;
    text-align: center;
    margin-bottom: 45px;
  }

  .video-container {
    position: relative;
    text-align: center;
  }

  .video-container a {
    display: block;
    cursor: pointer;
    width: 630px;
    margin: auto;
  }

  .video-container img {
    margin: auto;
    display: block;
  }

  .play-video {
    -webkit-transition: all 0.2s ease 0s;
    -moz-transition: all 0.2s ease 0s;
    -ms-transition: all 0.2s ease 0s;
    -o-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .play-video .fa-play {
    width: 60px;
    height: 60px;
    color: #fff;
    font-size: 23px;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 58px;
    padding-left: 9px;
  }

  .video-content a {
    margin-top: 10px;
  }

  .video-content h2 {
    color: #fff;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
  }

  /*  Modal Video */

  .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    cursor: pointer;
    opacity: 1;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-name: modal-video;
    animation-name: modal-video;
    -webkit-transition: opacity 0.3s ease-out;
    transition: opacity 0.3s ease-out;
  }

  .modal-video-body {
    max-width: 940px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: table;
  }

  .modal-video-inner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  .modal-video-movie-wrap {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    background-color: #333;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-name: modal-video-inner;
    animation-name: modal-video-inner;
    -webkit-transform: translate(0);
    transform: translate(0);
    -webkit-transition: -webkit-transform 0.3s ease-out;
    transition: -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  }

  .modal-video-movie-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .modal-video-close-btn {
    position: absolute;
    z-index: 2;
    top: -35px;
    right: -35px;
    display: inline-block;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border: none;
    background: transparent;
  }

  .modal-video-close-btn:before,
  .modal-video-close-btn:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #fff;
    border-radius: 5px;
    margin-top: -6px;
  }

  .modal-video-close-btn:before {
    transform: rotate(45deg);
  }

  .modal-video-close-btn:after {
    transform: rotate(-45deg);
  }

  /*---------------------------------------------------- 
  8. Fun Facts Section
  ------------------------------------------------------*/

  .confacts-section {
    background: #f6f8fa;
    position: relative;
  }

  .facts_wrapper {
    text-align: left;
    padding-left: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    background: #f4f6f8;
    box-shadow: 2px 0px 12px 1px rgba(243, 238, 238, 0.6);
  }

  .funfact_wapr .col-md-3.col-sm-12 {
    padding-left: 0px;
  }

  .confacts-section .container {
    position: absolute;
    top: 50%;
    background: #fff;
    padding: 50px 20px;
    margin: 0 auto;
    left: 50%;
    margin-left: -569px;
    margin-top: -118px;
    padding-right: 30px;
  }

  .facts_text {
    margin-left: 25px;
  }

  .funfact_wapr .col-sm-4 {
    padding-top: 20px;
    margin-top: 18px;
    text-align: right;
  }

  .facts_text h3 {
    margin-top: 26px;
    letter-spacing: 0px;
    font-size: 35px;
    line-height: 38px;
  }

  .stat-count.count {
    display: inline;
  }

  .funfact_wapr .icon-lay {
    float: right;
    margin-top: 11px;
    margin-right: 30px;
  }

  .facts_wrapper i {
    color: #c5c5c5;
    font-size: 50px;
  }

  .facts_wrapper h3 span {
    margin-top: 23px;
    margin-bottom: -12px;
    letter-spacing: 5px;
    font-size: 45px;
    color: #333;
    display: flex;
  }

  .facts_wrapper h5 {
    letter-spacing: 0px;
    margin-bottom: 16px;
    font-size: 16px;
    color: #333;
    font-weight: 400;
    margin-top: 30px;
  }

  /*---------------------------------------------------- 
  9. Work Section
  ------------------------------------------------------*/

  .work-section {
    padding-top: 190px;
    padding-bottom: 100px;
    background: #f6f8fa;
    overflow: hidden;
  }

  /* Work items 
  ------------------*/

  .work-section .container {
    padding: 0px 10px;
  }

  .work-section .col-sm-12 {
    float: left;
    padding: 0px 5px;
    overflow: hidden;
  }

  .projects-list .acount__nav {
    margin-bottom: 32px;
  }

  .single-project-item {
    background-color: #ddd;
    background-position: center center;
    background-size: cover;
    height: 320px;
    margin-top: 10px;
  }

  .projects-titles {
    list-style: outside none none;
    padding: 50px 0;
    text-align: center;
    margin-bottom: 0px;
    margin-top: -50px;
  }

  .projects-list .nav-item {
    color: #302b2b;
    cursor: pointer;
    display: inline-block;
    text-transform: capitalize;
    position: relative;
    transition: all 0.3s ease 0s;
    background: #fff;
    padding: 5px;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .projects-list .nav-item:first-child {
    padding-left: 10px;
  }

  .projects-list .nav-item:last-child {
    padding-right: 10px;
  }

  .projects-list .nav-link {
    display: block;
    padding: 10px 12px;
  }

  .projects-list .nav-link.active {
    color: #b89841;
    background: transparent;
  }

  .projects-titles li:last-child {
    padding-right: 20px;
  }

  .projects-titles li::after {
    width: 90%;
    height: 2px;
    background: #b89841;
    content: '';
    bottom: -15px;
    position: absolute;
    left: 10%;
    opacity: 0;
    transition: all 0.3s ease 0s;
  }

  .projects-titles li:hover::after {
    bottom: -5px;
    opacity: 1;
    transition: all 0.3s ease 0s;
  }

  .project-hover span,
  .project-hover a {
    color: #fff;
  }

  .projects-titles li.active {
    color: #b89841;
  }

  .project-hover h4 {
    top: 0px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    left: 25px;
    position: absolute;
    text-transform: capitalize;
    letter-spacing: 0px;
  }

  .project-hover span {
    display: block;
    font-size: 13px;
    font-weight: normal;
    padding-top: 10px;
    text-transform: capitalize;
    position: absolute;
    top: 46px;
    left: 25px;
    letter-spacing: 2px;
  }

  .project-link i {
    position: absolute;
    bottom: 30px;
    right: 30px;
    font-size: 20px;
  }

  .project-hover {
    opacity: 0;
    position: relative;
    transform: scale(0);
    transition: all 0.3s ease 0s;
    visibility: hidden;
    z-index: 1;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
  }

  .project-hover::before {
    background: #181715;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.7;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .single-project-item:hover .project-hover {
    opacity: 1;
    visibility: visible;
    z-index: 1;
    transform: scale(1);
  }

  /*---------------------------------------------------- 
  10. Team Section
  ------------------------------------------------------*/

  .team_section {
    padding-top: 60px;
    background: #fff;
    padding-bottom: 100px;
  }

  .member_info {
    width: 100%;
    bottom: 0;
    padding: 1px 17px;
    opacity: 1;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    text-align: center;
  }

  .member_warp:hover .member_info {
    opacity: 1;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .team_section .member_info h6 {
    display: block;
    font-size: 20px;
    letter-spacing: 1px;
    margin-top: 19px;
    color: #333;
    margin-bottom: 0px;
    text-transform: capitalize;
    border-bottom: 2px solid #ddd;
    padding-bottom: 18px;
    font-weight: 600;
  }

  .team_section .member_info small {
    display: block;
    margin-bottom: 8px;
    color: #4e4e4e;
  }

  .team_section .member_img {
    position: relative;
    overflow: hidden;
  }

  .team_section .member_img::after {
    background: #333;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    transform: scale(0);
    opacity: 0.7;
  }

  .member_warp:hover .member_img::after {
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    transform: scale(1.2);
  }

  .member_img img {
    display: inline-block;
    transform: scale(1);
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .member_warp:hover .member_img img {
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    transform: scale(1.2);
  }

  .team_section .team_social {
    position: absolute;
    bottom: 50%;
    left: 50%;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    z-index: 999999;
    margin-bottom: -68px;
    margin-left: -53px;
  }

  .member_warp:hover .team_social {
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    opacity: 1;
  }

  .team_section .team_social ul {
    list-style: none;
    padding: 0px 0px;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    text-align: center;
  }

  .team_section .team_social ul li {
    padding: 0px 10px;
    display: inline-block;
  }

  .team_section .team_social ul li a {
    color: #fff;
    font-size: 20px;
  }

  .team_section .member_warp {
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .team_section .member_warp:hover .member_info h6 {
    border-bottom: 2px solid #333;
  }

  /*---------------------------------------------------- 
  11. Pricing Section
  ------------------------------------------------------*/

  .pricing-section {
    padding-bottom: 100px;
    padding-top: 64px;
    background: #f6f8fa;
  }

  .pricing-section .col-sm-3 {
    padding-right: 9px;
    padding-left: 0px;
  }

  .pricing-box {
    text-align: center;
    background: #fff;
    box-shadow: 8px 5px 16px 3px rgba(0, 0, 0, 0.03);
    -webkit-box-shadow: 8px 5px 16px 3px rgba(0, 0, 0, 0.01);
  }

  .pricing-box h2 {
    font-size: 60px;
    margin-top: 0px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
  }

  .pricing_heading {
    position: relative;
    padding: 40px 0px;
    background-size: cover;
    background-position: center center;
  }

  .pricing-box h2 span {
    font-size: 26px;
    position: relative;
    top: -11px;
    padding-right: 6px;
  }

  .pricing-box h2 sub {
    font-size: 16px;
    display: block;
    margin-top: 15px;
    margin-bottom: -27px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .pricing-box h5 {
    color: #333;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 25px;
  }

  .pricing-box ul {
    padding: 26px 10px 35px 105px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    list-style: none;
    margin-top: 0px;
    margin-bottom: -10px;
  }

  .pricing-box h4 {
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 22px;
    margin-top: 8px;
  }

  .pricing-box li {
    padding: 5px 0px;
    text-align: left;
  }

  .pricing-box a {
    color: #fff;
    background: transparent;
    border-radius: 50px;
    border: 1px solid #333;
    color: #333;
  }

  .pricing-box .text-center {
    padding-bottom: 36px;
  }

  .pricing-box a:hover {
    color: #fff;
    border: 1px solid #b89841;
  }

  /*---------------------------------------------------- 
  12. Blog Section
  ------------------------------------------------------*/

  .blog-section {
    background: #fff;
    padding-bottom: 73px;
    padding-top: 60px;
  }

  .blog_content_warp {
    position: relative;
    padding: 20px;
    background: #f6f8fa;
    top: -27px;
    z-index: 99;
    width: 95%;
    margin-left: 8px;
    border-radius: 10px 10px 0px 0px;
  }

  .blog-warp-1 h5 a {
    text-align: left;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .blog-warp-1:hover .blog_imgg {
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .blog-warp-1:hover .blog_imgg img {
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    transform: scale(1.2);
  }

  .blog-warp-1:hover .blog_imgg::after {
    opacity: 0.7;
  }

  .blog_imgg {
    position: relative;
    z-index: 11;
    overflow: hidden;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .blog_imgg::after {
    position: absolute;
    background: #333;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    content: '';
    z-index: 99;
    left: 0;
    opacity: 0;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .blog-warp-1 h5 {
    margin-top: 14px;
    margin-bottom: -4px;
  }

  .blog-warp-1 img {
    width: 100%;
    height: 240px;
    display: inline-block;
    transform: scale(1);
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }

  .blog-warp-1 .subtext {
    text-align: left;
    color: #484646;
    text-transform: none;
    letter-spacing: 1px;
    font-size: 13px;
    line-height: 17px;
    margin-top: 8px;
    margin-right: 25px;
  }

  .blog-warp-1 p {
    text-align: left;
    margin-top: 0px;
    margin-bottom: 15px;
    border-bottom: 1px solid #f5eded;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .blog-warp-1 .blog_btn {
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #424242;
    display: block;
    font-weight: bold;
  }

  .blog-warp-1 .blog_btn:hover {
    letter-spacing: 2px;
  }

  .blog-warp-1 .blog_btn span {
    margin-left: 10px;
  }

  .blog_datee {
    color: #484646;
    letter-spacing: 1px;
    font-size: 13px;
    margin-right: 25px;
  }

  .subtext i {
    margin-right: 2px;
  }

  .publisd-date {
    position: absolute;
    top: 50%;
    right: 50%;
    background: #b89841;
    text-align: center;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    width: 45px;
    height: 45px;
    line-height: 47px;
    border-radius: 45px;
    color: #fff;
    cursor: pointer;
    z-index: 99999;
    margin-top: -23px;
    margin-right: -23px;
    opacity: 0;
  }

  .publisd-date i {
    color: #fff;
  }

  .blog-warp-1:hover .publisd-date {
    opacity: 1;
  }

  /*---------------------------------------------------- 
  13. Testimonial Section
  ------------------------------------------------------*/

  .testimonials-section {
    padding-bottom: 66px;
    padding-top: 64px;
    background: #fff;
    background-size: cover;
    background-attachment: fixed;
  }

  .testimonials-section .base-header {
    padding-bottom: 25px;
  }

  .testimonials-section .base-header h3 {
    color: #fff;
  }

  .testimonial-box {
    text-align: center;
    position: relative;
    padding: 30px 190px;
    margin-top: 80px;
  }

  .testi_images {
    position: absolute;
    top: -21%;
    left: 50%;
    margin-left: -51px;
    z-index: 9999999999999;
    overflow: hidden;
    display: block;
  }

  .testimonials-section .item .col-lg-6 {
    margin-left: -30px;
  }

  .testimonials-section .testimonial-box img {
    border-radius: 50%;
    text-align: center;
    margin: 0 auto;
  }

  .testimonials-section .testimonial-box .cus-title {
    margin-top: 8px;
    display: block;
  }

  .testimonials-section .testimonial-box .tes-nam {
    font-size: 16px;
    text-transform: capitalize;
    letter-spacing: 2px;
    font-weight: 700;
    color: #fff;
    display: block;
  }

  .testimonials-section .tes-degree {
    color: #f6eded;
    font-size: 13px;
    display: block;
    margin-bottom: 5px;
    margin-top: 3px;
  }

  .testimonials-section .testimonial-box p {
    color: #ffff;
    margin-top: 45px;
    margin-bottom: 22px;
  }

  .testimonials-section .testimonial-box p::before {
    content: '\\f10d';
    font-family: 'Fontawesome';
    margin-right: 10px;
    color: #cfd9dd;
    font-size: 27px;
    top: -4px;
    position: relative;
    left: 0;
    float: left;
  }

  .cus-title i {
    color: #b89841;
  }

  .testimonials-section .owl-theme .owl-controls .owl-dot span {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    display: inline-block;
    background: transparent;
    display: inline-block;
    border: 3px solid;
    color: #b89841;
  }

  /*---------------------------------------------------- 
  14. Client Section
  -----------------------------------------------------*/

  .client-section {
    padding-top: 90px;
    padding-bottom: 0px;
  }

  .client-section .slick-slider {
    border-bottom: 1px solid #ede4e4;
    padding-bottom: 100px;
  }

  .client-box {
    cursor: pointer;
    -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    -moz-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    -ms-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    -o-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
  }

  .client-box,
  .client-box img,
  .client-box:hover,
  .client-box:hover img {
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
    -ms-transition: all ease 0.5s;
    -o-transition: all ease 0.5s;
    transition: all ease 0.5s;
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
    -ms-transition: all ease 0.5s;
    -o-transition: all ease 0.5s;
    transition: all ease 0.5s;
  }

  .client-section .owl-theme .owl-controls {
    margin-top: 38px;
  }

  .client-section .owl-carousel .owl-item img {
    width: auto;
    display: inline-block;
  }

  .client-box:hover img {
    opacity: 0.8;
  }

  .client-box {
    width: 100%;
    text-align: center;
    cursor: pointer;
    -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    -moz-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    -ms-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    -o-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
    line-height: 120px;
    padding-right: 10px;
    padding-top: 10px;
  }

  .client-box,
  .client-box img,
  .client-box:hover,
  .client-box:hover img {
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
    -ms-transition: all ease 0.5s;
    -o-transition: all ease 0.5s;
    transition: all ease 0.5s;
  }

  /* Client Section v2
  ---------------------------------------*/

  .layoutTwo .client-section .slick-slider {
    border-top: 1px solid #ede4e4;
    border-bottom: 1px solid transparent;
    padding-top: 90px;
  }

  .layoutTwo .client-section {
    padding-top: 0px;
  }

  /*---------------------------------------------------- 
  15. Contact section
  ------------------------------------------------------*/

  .contact-section {
    padding-bottom: 100px;
    padding-top: 60px;
  }

  .contact_info {
    padding-bottom: 70px;
  }

  .bottom_contact i {
    color: #b89841;
    float: left;
    font-size: 30px;
    margin-top: 5px;
    border: 1px dashed #ddd;
    padding: 10px;
    margin-right: 20px;
  }

  .bottom_contact p {
    margin-bottom: 0;
    padding-left: 50px;
    margin-top: 6px;
  }

  .bottom_contact h4 {
    color: #333;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    padding-left: 50px;
  }

  .inner-contact {
    overflow: hidden;
    margin-top: -5px;
  }

  .contact-form p {
    margin: 0px;
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    margin-top: -2px;
  }

  .contact-form i {
    font-size: 20px;
    margin-right: 10px;
  }

  .contact-form .base-header h3 {
    font-size: 19px;
    letter-spacing: 1px;
    margin-bottom: 0px;
    margin-top: -5px;
    font-weight: 700;
  }

  .contact-form .base-header small {
    font-size: 13px;
    letter-spacing: 3px;
    margin-bottom: 4px;
    margin-top: 6px;
  }

  .contact-form .header-sign {
    font-size: 19px;
    left: 3px;
  }

  .contact-form {
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px 0 0 0;
  }

  .contact-form .header-sign2 {
    font-size: 19px;
    left: -3px;
  }

  @media screen and (max-width: 767px) {
    .contact-form .col-sm-4 {
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 767px) {
    .contact-form .col-sm-4:last-child {
      margin-bottom: 0;
    }
  }

  .form-control {
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ddd;
    border-radius: 1px;
    box-shadow: none;
    line-height: 2.429;
  }

  .form-control:focus {
    border: 1px solid #fff;
    box-shadow: none;
  }

  .form-group {
    margin-bottom: 5px;
    padding-right: 15px;
    padding-left: 0px;
  }

  .contact-form textarea {
    border: 1px solid #e7e7e7 !important;
    height: 155px;
    padding: 15px;
  }

  .contact-form .form-control {
    outline: inherit;
    border-color: #e7e7e7;
    border-width: medium medium 1px;
    border-style: none none solid;
    border-color: -moz-use-text-color -moz-use-text-color #b89841;
    -moz-border-top-colors: none;
    -moz-border-right-colors: none;
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    border-image: none;
    width: 100%;
    margin-bottom: 26px;
    padding-bottom: 15px;
    line-height: 10px;
    border: transparent;
    border-bottom: 1px solid #e7e7e7;
  }

  .contact-form:focus {
    border-bottom: 1px solid #f3f3f3;
  }

  .contact-form::-moz-placeholder {
    color: #9b9ba3;
    font-size: 14px;
    text-align: left;
  }

  .contact-form:-ms-input-placeholder {
    color: #9b9ba3;
    font-size: 14px;
    text-align: left;
  }

  .input_group_full_width {
    padding-left: 20px;
  }

  .contact-form .submit-button {
    padding: 13px 37px;
    letter-spacing: 1px;
    outline: none;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    -ms-border-radius: 50px;
    -o-border-radius: 50px;
    border-radius: 50px;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
    background: #b89841;
    color: #fff;
    border: 1px solid #b89841;
    float: right;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
  }

  .contact-form .submit-button:hover {
    background-color: transparent;
    color: #b89841;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }

  .contact-form textarea {
    margin-top: 10px;
    height: 156px;
  }

  /*---------------------------------------------------- 
  16. Footer Section
  ------------------------------------------------------*/

  .footer-section {
    float: left;
    width: 100%;
    color: #fff;
    background: #252525;
    padding-top: 42px;
  }

  .footer_middle {
    padding-top: 42px;
  }

  .footer-section .widget {
    padding-bottom: 25px;
  }

  .footer-section .widget h5 {
    color: #fff;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 20px;
    margin-bottom: 26px;
  }

  .footer-section .widget h3 {
    color: #fff;
    letter-spacing: 3px;
  }

  .footer-section .widget p {
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

  /*----------------------------------------------------
   Single Page 
  ------------------------------------------------------*/

  /* ================================= 
  14. Single Page Header
  ================================= */

  header {
    position: relative;
    text-align: center;
    color: #fff;
    background-color: rgba(32, 32, 32, 0.74);
    height: 700px;
  }

  header .container {
    z-index: 10;
    position: relative;
    top: 40%;
    transform: translateY(-50%);
  }

  header.blog-banner {
    color: #fff;
    box-sizing: border-box;
    height: 307px;
    width: 100%;
    background-position: 50% 0px;
  }

  header {
    position: relative;
    text-align: center;
    color: #fff;
    background-color: rgba(198, 227, 221, 0.39);
    height: 700px;
  }

  .blog-header {
    text-align: left;
  }

  .blog-header h4 {
    color: #333;
    text-transform: capitalize;
    font-size: 14px;
    letter-spacing: 1px;
    display: block;
    margin-bottom: -25px;
    font-weight: 600;
  }

  .blog-header h4 a {
    color: #444;
  }

  .blog-header h3 {
    color: #333;
    text-transform: capitalize;
    font-size: 45px;
    letter-spacing: 1px;
    padding-bottom: 31px;
    font-weight: 700;
    margin-bottom: 0px;
  }

  .blog-header h4 a:hover {
    color: #000;
  }

  .blog-header h3 {
    line-height: 46px;
  }

  /* ================================= 
  15. Blog Page
  ================================= */

  .blog_container {
    padding-bottom: 25px;
  }

  .single_blog_page {
    padding-bottom: 15px;
  }

  .blog-area {
    padding-top: 100px;
    padding-right: 40px;
  }

  .blog_container .blog-warp-1 img {
    height: 100%;
  }

  .blog_page_one .blog-warp-1 {
    margin-bottom: 20px;
  }

  .blog_page_one .blog-warp-1 p {
    border-bottom: 1px solid transparent;
    padding-bottom: 10px;
  }

  .blog_page_one .blog_content_warp {
    padding-bottom: 25px;
  }

  .single_blog_page .blog_content_warp {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .single_blog_page .blog-warp-1 p {
    border-bottom: 1px solid transparent;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }

  .sing_blog_middle_box {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .sing_blog_img {
    width: 340px;
    float: left;
    overflow: hidden;
  }

  .single_blog_page .sing_blog_text h5 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 14px;
  }

  .sing_blog_text h3 {
    font-size: 18px;
    margin-bottom: 0px;
    margin-top: 10px;
    font-weight: 600;
  }

  .sing_blog_text {
    padding-left: 30px;
    padding-top: 15px;
    position: relative;
    width: 280px;
    float: left;
  }

  .single_blog_page .sing_blog_text::before {
    content: '\\f10d';
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    color: #c9cccc;
    font-size: 24px;
    position: absolute;
    top: -8px;
    left: 32px;
  }

  /* - Pagination */

  .pagination {
    width: 100%;
    margin-bottom: 42px;
    margin-top: 0px;
  }

  .blog_container .pagination .pager {
    top: -20px;
    padding-left: 15px;
  }

  .pagination .pager {
    text-align: left;
    display: inline-block;
    position: relative;
    top: 6px;
  }

  .pager li {
    position: relative;
    padding: 0 3px;
    display: inline;
  }

  .pager .pagi-big a {
    color: #fff;
    font-weight: 700;
  }

  .pager li a {
    border-radius: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    border: 1px solid #b89841;
    background: #b89841;
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
  }

  .pager-icon {
    font-size: 14px;
    left: 0px;
    position: relative;
    top: 6px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .pager-icon:hover {
    color: #000;
  }

  .pagination .pager li > a:focus,
  .pagination .pager li > a:hover {
    background-color: transparent;
    color: #222;
  }

  /* -- Widget Area */

  .widget-area {
    text-align: center;
    margin-top: 100px;
    background: #f6f8fa;
    padding-top: 30px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 20px;
    height: max-content;
  }

  /* - Widget */

  .widget {
    display: inline-block;
    margin-bottom: 28px;
    width: 100%;
  }

  /* - Widget Twitter */

  .widget-post-twitter .timeline-Tweet:hover {
    background-color: transparent !important;
  }

  .timeline-Tweet:hover {
    background-color: transparent !important;
  }

  /* - Widget Search */

  .widget-search {
    display: block;
    background: #fff;
    border: 3px solid #efeaea;
    margin-top: 16px;
    margin-bottom: 45px;
  }

  .widget-search .input-group input {
    background: transparent none repeat scroll 0% 0%;
    border: 0px none;
    border-radius: 0px;
    transition: none 0s ease 0s;
    box-shadow: none;
    font-size: 14px;
    font-weight: 400;
    color: #8f8f8f !important;
    height: auto;
  }

  .widget-search .input-group button {
    background: transparent;
    border: medium none;
    font-size: 18px;
    color: #b89841;
    padding: 0px 12px;
    margin-top: 13px;
  }

  .input-group-btn {
    left: 0px;
  }

  /* - Widget Title */

  .widget .widget-title {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 600;
    text-align: left;
    letter-spacing: 1px;
    margin-top: 0px;
    position: relative;
    padding: 10px 0px;
    color: #333;
    border-bottom: 1px solid #ddd;
  }

  /* - Categories Type */

  .categories-type li {
    padding: 7px 10px;
    letter-spacing: 0.5px;
    color: #b89841;
    list-style: circle;
  }

  .categories-type li:last-child {
    border-bottom: none;
  }

  .widget-post-categories .categories-type {
    text-align: left;
    display: inline-block;
    margin-top: -8px;
    width: 100%;
    margin-left: -53px;
    margin-bottom: -7px;
  }

  .categories-type li a {
    color: #363636;
  }

  .categories-type li:hover a {
    color: #000;
  }

  .categories-type li span {
    float: right;
    clear: both;
  }

  /* - Recent Post */

  .wiget-recent-post {
    margin-bottom: 30px;
  }

  .wiget-recent-post .widget-title {
    margin-bottom: 10px;
    margin-top: -13px;
  }

  .recent-post-box {
    display: inline-block;
    padding-bottom: 0px;
    margin-top: 13px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .recent_wid_pic {
    width: 100px;
    float: left;
  }

  .recent_wid_pic img {
    height: 70px;
  }

  .recent-post-box:last-of-type {
    border-bottom: none;
  }

  .recent-title {
    text-align: left;
    padding-left: 15px;
    overflow: hidden;
  }

  .recent-title > a {
    font-size: 14px;
    margin-bottom: 10px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #333;
  }

  .recent-title > a:hover {
    text-decoration: underline;
    color: #333;
  }

  .recent-title > p {
    font-size: 13px;
    color: #474343;
    margin-top: -8px;
    margin-bottom: 0px;
  }

  /* - Widget Instagram */

  .instagram-photo-list {
    padding: 0px;
    margin: 0px;
    list-style: outside none none;
  }

  .instagram-photo-list li {
    padding: 4px;
    width: 33.33%;
    float: left;
  }

  .instagram-photo-list li img {
    transition: all 0.2s ease 0s;
    width: 100%;
  }

  .instagram-photo-list li:hover img {
    transition: all 0.2s ease 0s;
    opacity: 0.5;
  }

  .widget-instagram img {
    width: 105px;
  }

  /* - Widget Tags */

  .widget-tags {
    text-align: left;
    width: 100%;
  }

  .widget-tags .widget-title {
    display: inline-block;
    width: 100%;
    margin-bottom: 22px;
  }

  .widget-tags a:hover {
    color: #fff;
    transition: all 1s ease 0s;
    border-color: #b89841;
    background: #b89841;
  }

  .widget-tags a {
    color: #fff;
    text-decoration: none;
    padding: 6px 13px;
    display: inline-block;
    margin-bottom: 5px;
    font-size: 13px;
    background: #363636;
    margin-right: 5px;
  }

  /* - Start : Blog Coment Tags */

  .list-comments {
    padding-top: 45px;
  }

  .comments-section-title h4 {
    margin-top: 0px;
    font-size: 20px;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: left;
    padding: 15px 0px;
    color: #333;
  }

  .comments {
    padding: 0px;
    margin: 0px;
  }

  .comments li {
    list-style: outside none none;
  }

  .comments li .comment {
    padding: 20px 0px 45px;
    position: relative;
    overflow: hidden;
    text-align: left;
  }

  .comments li .comment img.comment-avatar {
    float: left;
    border-radius: 50%;
  }

  .comments li .comment strong.commenter-title {
    text-transform: capitalize;
    display: block;
    color: #8b8b8b;
    letter-spacing: 2px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }

  .comments li .comment strong.commenter-title a {
    color: #000;
  }

  .comments li .comment span.comment-date {
    font-size: 13px;
    margin-bottom: 10px;
    color: #352f2f;
    margin-top: 0px;
    text-transform: capitalize;
    margin-left: 20px;
    float: right;
  }

  .blog_com_dt {
    width: 79%;
    float: left;
    margin-left: 25px;
  }

  .comments li .comment:last-child {
    margin-top: -30px;
  }

  .comments li .comment p:last-child {
    margin-bottom: 0px;
    font-weight: 300;
  }

  .comments li > ul {
    padding-bottom: 10px;
  }

  .comments li .comment p {
    margin-top: 7px;
    font-size: 14px;
  }

  .blog-contact {
    padding: 0px;
    margin-bottom: 84px;
  }

  .blog-contact h4 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .blog-contact .form-control {
    color: #555;
    background-color: #fff;
    background-image: none;
    border-radius: 1px;
    box-shadow: none;
    line-height: 2.429;
    border: 1px solid transparent;
    border-bottom: 1px solid #e7e7e7;
  }

  .blog-contact .form-group {
    margin-bottom: 15px;
    float: left;
  }

  /* - End : Blog Coment Tags */
  /* ================================= 
  Blog Page Two 
  ================================= */

  .blog-area .blog_content_warp {
    padding-bottom: 25px;
    margin-left: 18px;
  }

  /* ================================= 
  16. Contact Page
  ================================= */

  .contact_page .base-header {
    padding-top: 38px;
  }

  /* ================================= 
  17. Work Page
  ================================= */

  .work-section.work_page {
    padding-top: 60px;
  }

  /* ================================= 
  18. Service Page
  ================================= */

  .funfact_serv {
    background: #f6f8fa;
  }

  .funfact_serv .container {
    margin-top: 0;
    position: relative;
    background: #f6f8fa;
  }

  .funfact_serv {
    background: #f6f8fa;
    padding-bottom: 50px;
    margin-top: -50px;
  }

  .funfact_serv .facts_wrapper {
    background: #fff;
  }

  .funfact_serv .facts_text {
    margin-left: 11px;
  }

  .client_page .owl-stage-outer {
    border-bottom: 1px solid transparent;
    padding-bottom: 60px;
  }

  .funfact_serv .funfact_wapr .col-sm-3 {
    padding-left: 15px;
  }

  /* ================================= 
  19. About Page
  ================================= */

  /* Our Skill
  =========================*/

  .our-skill {
    background: #f6f8fa;
    padding-bottom: 95px;
  }

  .our-skill .skill-text h2 {
    font-size: 22px;
    margin-bottom: 15px;
    margin-top: 0px;
    font-weight: 600;
  }

  .our-skill .skill-text p {
    margin-bottom: 20px;
  }

  .about_pg_lst ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 50%;
    float: left;
  }

  .about_pg_lst ul li {
    margin-bottom: 10px;
  }

  .about_pg_lst ul li i {
    padding-right: 6px;
    color: #b89841;
  }

  .skill_wrap {
    margin-top: -27px;
    padding-left: 30px;
  }

  .our-skill .single-skill {
    margin-top: 20px;
  }

  .our-skill .skill-info {
    overflow: hidden;
  }

  .our-skill .skill-info h4 {
    float: left;
    font-size: 15px;
    margin-bottom: 10px;
    color: #353535;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 7px;
  }

  .our-skill .progress .progress-bar span {
    right: 0;
    color: #b89841;
    top: -35px;
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    right: 16px;
  }

  .our-skill .progress .progress-bar {
    background-color: #b89841 !important;
  }

  .our-skill .progress .progress-bar span::before {
    position: absolute;
    bottom: -15px;
    left: 50%;
    content: '';
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid;
    margin-left: -8px;
  }

  .our-skill .progress {
    height: 12px;
    border-radius: 0px;
    box-shadow: none;
    overflow: visible;
    background: #edeaea;
    margin-bottom: 0px;
  }

  .our-skill .progress .progress-bar {
    position: relative;
  }

  /* End Our Skill CSS 
  =========================*/

  /*===================================== 
  20. Gallery page
  =====================================*/

  .single-work-page {
    padding-top: 60px;
    padding-bottom: 80px;
  }

  .portfoliodesc {
    margin-bottom: 10px;
  }

  .project-details {
    margin-top: 25px;
  }

  .portfolioitem .slick-arrow {
    z-index: 99;
    top: 100%;
    margin-top: -55px;
    margin-right: 75px;
  }

  .portfolioitem .slick-next::before {
    content: '>';
  }

  .portfolioitem .slick-prev::before {
    content: '<';
  }

  .portfolioitem .slick-next::before,
  .portfolioitem .slick-prev::before {
    font-size: 17px;
    opacity: 1;
    color: #fff;
    background: #b89841;
    padding: 14px 16px;
    margin: auto;
  }

  .portfolioitem .slick-arrow.slick-prev {
    right: 25px;
    left: auto;
  }

  .portfolio-single-detail h4 {
    font-size: 25px;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .project-details h4 {
    font-size: 25px;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 25px;
    margin-top: 20px;
  }

  .portfoliodesc .project-details p {
    margin-top: 0px;
  }

  .portfolio-single-detail {
    padding-left: 20px;
  }

  .portfolio-single-detail ul {
    margin-bottom: 35px;
    margin-top: 15px;
  }

  .project-detail-list > li {
    margin-bottom: 15px;
    border-bottom: 1px solid #dbe1e0;
    padding-bottom: 15px;
  }

  .project-detail-list strong {
    display: inline-block;
    min-width: 150px;
    position: relative;
    margin-right: 12px;
    text-transform: capitalize;
    font-size: 15px;
    color: #333;
    margin-bottom: 0px;
    font-weight: normal;
  }

  .portfolio-single-detail ul {
    margin-bottom: 50px;
    margin-top: 30px;
    width: 100%;
    float: left;
    margin-right: 17px;
  }

  .port_single_share {
    width: 100%;
    overflow: hidden;
  }

  .port_single_share h4 {
    padding-bottom: 10px;
  }

  .port_single_share ul {
    width: 100%;
    margin-top: 15px;
  }

  .port_single_share li {
    padding-right: 0px;
    display: inline-block;
    margin-right: 10px;
  }

  .port_single_share .social-icons > li > a {
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    line-height: 27px;
    text-align: center;
    color: #1e1c1c;
  }

  .port_single_share .social-icons > li > a i {
    font-size: 14px;
    background: #b89841;
    border: 1px solid #b89841;
    color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    line-height: 28px;
  }

  .port_single_share .social-icons > li > a i:hover {
    background: transparent;
    border: 1px solid #b89841;
    color: #b89841;
  }

  .work-section.related_work .col-sm-3 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .work-section.related_work {
    padding-bottom: 100px;
    padding-top: 60px;
  }

  .related_work .single-project-item {
    height: 300px;
  }

  .related_work .base-header {
    padding-bottom: 40px;
  }

  /*===================================== 
  21. Team Page
  =====================================*/

  .team_page {
    padding-bottom: 50px;
  }

  .team_page .member_warp {
    margin-bottom: 50px;
  }

  /*===================================== 
  22. Single Service Page
  =====================================*/

  .single_service_section {
    padding-top: 100px;
    padding-bottom: 80px;
  }

  .single_service_page_content {
    padding-right: 25px;
  }

  .single_service_page_content .single_service_title h3 {
    margin-top: 30px;
    font-size: 28px;
    text-transform: capitalize;
    margin-bottom: 17px;
    font-weight: 600;
  }

  .single_service_page_content img {
    width: 100%;
  }

  .single_service_category a {
    padding-left: 15px;
    color: #333;
    text-transform: capitalize;
  }

  .single_service_category ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .single_service_category li {
    background: #f1f4f8;
    margin-bottom: 10px;
    padding: 16px 20px;
  }

  .single_service_category ul li a:hover {
    text-decoration: underline;
  }

  .single_service_side_bar .single_service_category ul li a i {
    font-size: 18px;
    line-height: 60px;
    margin-right: 8px;
  }

  .single_service_s2 {
    background: #f6f8fa;
    padding-bottom: 70px;
  }

  /*==============================
    Index v2 
  ==============================*/

  /*--------------------------------
   Slider Section 
  ------------------------------*/
  /*header Social*/

  .social-nav {
    margin-left: 10px;
    float: left;
  }

  .social-nav ul li a {
    padding: 27px 10px;
    font-size: 16px;
    position: relative;
    top: 28px;
  }

  .social-nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .social-nav ul li {
    display: inline-block;
  }

  .navigation_v2 #navigation {
    float: right;
  }

  .slides_wrapper_v2 .col-md-6 {
    max-width: 58%;
    flex: 0 0 58%;
    margin-top: -75px;
  }

  .slides_wrapper_v2 .slider_btn a {
    background: transparent;
    border: 2px solid #fff;
  }

  .slides_wrapper_v2 .slider_btn a:hover {
    background: #b89841;
    color: #fff;
    border: 2px solid #b89841;
  }

  .slides_wrapper_v2 h2::after {
    display: none;
  }

  .slides_wrapper_v2 .slide_bg_1 {
    height: 852px;
  }

  .slides_wrapper_v2 .slide_bg_2 {
    height: 852px;
  }

  .slides_wrapper_v2 .single_slider h2 {
    color: #fff;
  }

  .slides_wrapper_v2 .single_slider p {
    color: #fff;
    margin-top: 25px;
  }

  /*---------------------------------------------------- 
   Promo Section 
  ------------------------------------------------------*/

  .header_promo {
    position: relative;
  }

  .header_promo .container {
    position: absolute;
    top: -118px;
    z-index: 99;
    left: 50%;
    transform: translateX(-50%);
    padding-left: 30px;
    padding-right: 30px;
  }

  .header_promo .col-md-4 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .single_promo_box {
    -webkit-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
    text-align: center;
    height: 270px;
    padding: 10px 40px 0px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }

  .header_promo .col-md-4:nth-child(2) .single_promo_box {
    padding: 10px 40px 0px;
    height: 330px;
    position: absolute;
    top: -30px;
  }

  .single_promo_box i {
    font-size: 37px;
  }

  .single_promo_box h4 {
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 0px;
    text-transform: capitalize;
  }

  .single_promo_box h4,
  .single_promo_box i,
  .single_promo_box p,
  .single_promo_box a {
    color: #fff;
  }

  /*---------------------------------------------------- 
  About Section 
  ------------------------------------------------------*/

  .base-header2 {
    text-align: center;
    padding-bottom: 18px;
  }

  .base-header2 h1 {
    padding-bottom: 20px;
    letter-spacing: 2px;
    position: relative;
    color: #212121;
    font-size: 2.125rem;
    line-height: 2.75rem;
  }

  .base-header2 small {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    line-height: 0.8;
    letter-spacing: 4px;
    margin-bottom: 17px;
    position: relative;
    color: #b89841;
  }

  //.base-header2 h1::after {
  //  position: absolute;
  //  content: '';
  //  background: #b89841;
  //  width: 100px;
  //  height: 2px;
  //  left: 50%;
  //  margin-left: -52px;
  //  bottom: 0;
  //  margin-bottom: -5px;
  //}

  .about_section_v2 {
    padding-top: 246px;
    padding-bottom: 66px;
  }

  .about_section_v2 .base-header2 {
    padding-bottom: 8px;
  }

  .about_section_v2 .about_v2_list {
    overflow: hidden;
    margin-bottom: 30px;
    transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
  }

  .about_v2_list:hover h5 {
    color: #b89841;
  }

  .about_v2_list:hover i {
    color: #b89841;
  }

  .about_img {
    position: relative;
  }

  .about_img::after {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2f2e2e;
    content: '';
    bottom: 0;
    opacity: 0;
    left: 0;
  }

  .about_v2_list:hover .about_img::before {
    bottom: -10px;
    transform: none;
  }

  .about_v2_list:hover .about_img::after {
    opacity: 0.5;
  }

  .about_img img {
    width: 100%;
    height: 100%;
  }

  .about_v2__para i {
    border: 1px dotted #bfb4b4;
    padding: 10px;
    color: #333;
    font-size: 32px;
  }

  .about_v2__para h5 {
    margin-top: 20px;
    margin-bottom: -3px;
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #1c1f25;
    display: inline-block;
  }

  .about_read a {
    letter-spacing: 2px;
    font-size: 14px;
    text-transform: capitalize;
    color: #444;
  }

  .about_read a:hover {
    letter-spacing: 3px;
  }

  /*----------------------------------------------------
    Services Section  
  ------------------------------------------------------*/

  .service_section_v2 {
    padding-top: 64px;
    padding-bottom: 60px;
    background: #f6f8fa;
  }

  .service_section_v2 .base-header2 {
    padding-bottom: 28px;
  }

  .serv_item_v2 {
    padding: 40px 20px 23px 25px;
    position: relative;
    margin-top: -10px;
    background: #fff;
    margin-bottom: 40px;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .serv_item_v2:hover {
    box-shadow: -5px -5px 17px 0px rgb(243, 238, 238);
  }

  .serv_item_v2::before {
    position: absolute;
    content: '';
    height: 30px;
    width: 30px;
    bottom: 0;
    right: 0;
    background: #fbfbfb;
    background: -webkit-linear-gradient(135deg, #202125 45%, #343845 50%, #343845 56%);
    background: linear-gradient(315deg, #f8f8f8 45%, #f2e7e7 50%, #f6f4f4 56%);
  }

  .serv_item_v2 .serv2-left {
    display: block;
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: #333;
    margin: 0 auto;
    padding: 4px 0px;
    margin-left: 65px;
  }

  .serv_item_v2 .icon-serv2 {
    height: 46px;
    float: left;
  }

  .serv_item_v2 .icon-serv2::before {
    font-size: 40px;
    color: #1c1f25;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    color: #b89841;
  }

  .serv_item_v2 p {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
  }

  /*----------------------------------------------------
     Work Section  
  ------------------------------------------------------*/

  .work_section_v2 {
    padding-bottom: 40px;
    padding-top: 64px;
  }

  .work_section_v2 .container-fluid {
    padding: 0px;
  }

  .work_section_v2 .projects-list .acount__nav {
    margin-bottom: 50px;
  }

  .work_section_v2 .single-project-item {
    height: 400px;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .work_section_v2 .col-md-3 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .work_section_v2 .more-link {
    margin-top: 50px;
    background: transparent;
    color: #b89841;
    margin-bottom: 50px;
    padding: 15px 40px;
  }

  .work_section_v2 .more-link:hover {
    background: #b89841;
    color: #fff;
  }

  .work_section_v2 .text-center {
    width: 100%;
    padding: 10px 0px;
  }

  /*----------------------------------------------------
     confacts Section  
  ------------------------------------------------------*/

  .confacts_section_v2 {
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .confacts_section_v2 .container {
    position: inherit;
    top: 0%;
    margin-top: 0px;
    background: transparent;
    padding: 50px 30px;
  }

  .confacts_section_v2 .funfact_wapr h3 span,
  .confacts_section_v2 .funfact_wapr h3,
  .confacts_section_v2 .funfact_wapr h5 {
    color: #fff;
  }

  .confacts_section_v2 .facts_wrapper {
    background: transparent;
    box-shadow: none;
    margin-top: -5px;
  }

  .confacts_section_v2 .facts_text {
    margin-left: 0px;
  }

  .confacts_section_v2 .funfact_wapr .col-sm-3 {
    padding-left: 15px;
  }

  /*----------------------------------------------------
   Team Section
  ------------------------------------------------------*/

  .team_section_v2 {
    background: #fff;
    padding-bottom: 96px;
    padding-top: 64px;
  }

  .team_section_v2 .carousel .slide {
    background: transparent;
  }

  .team_content {
    position: relative;
    display: flex;
  }

  .team_content_wrap {
    display: flex;
    text-align: left;
    flex-wrap: wrap;
    align-self: baseline;
    width: 115%;
    padding-right: 60px;
    justify-content: space-between;
  }

  .team_content .team_img {
    border-radius: 15px;
  }

  .team_content h4 {
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
    margin-top: 0px;
    font-weight: 600;
  }

  .team_content h5 {
    color: #747171;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    margin-top: 0px;
    margin-bottom: 3px;
    letter-spacing: 1px;
  }

  .team_content > p {
    margin-bottom: 55px;
  }

  .team_social_link > ul {
    margin: 0;
    text-decoration: none;
    padding-left: 0;
  }

  .team_social_link li {
    float: left;
    margin-right: 2px;
    list-style: none;
  }

  .team_social_link a i {
    background: #b89841;
    color: #fff;
    font-size: 16px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    width: 34px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    margin-right: 5px;
    text-decoration: none;
  }

  .team_social_link a i:hover {
    background: #333;
  }

  .slick-slide img {
    width: 100%;
  }

  .team_wrap {
    margin-bottom: 25px;
  }

  .team_wrap2 {
    margin-top: -145px;
    padding-left: 0;
  }

  /* thumb  */

  .team_section_v2 .carousel .thumbs-wrapper {
    margin-top: -74px;
  }

  .carousel .thumbs {
    padding: 0px;
    margin: 0;
    border: 0px solid #333;
  }

  .carousel .thumb {
    border: 0px solid #fff;
    padding: 0px;
  }

  .carousel .thumbs-wrapper {
    margin: 0px;
  }

  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 0px solid #333;
  }

  /* Arrow */

  .carousel.carousel-slider .control-arrow {
    padding: 0;
    opacity: 1;
  }

  .carousel .control-next.control-arrow::before {
    border-left: 8px solid transparent;
    background: #b89841;
    content: '<';
    line-height: 2px;
    padding: 12px 8px 12px 2px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    margin: 0;
  }

  .carousel .control-prev.control-arrow::before {
    border-right: 8px solid transparent;
    background: #b89841;
    content: '>';
    line-height: 2px;
    padding: 12px 2px 12px 8px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: 0;
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: transparent;
  }

  .carousel-slider .control-disabled.control-arrow {
    opacity: 1;
    cursor: pointer;
    display: block;
  }

  .carousel .control-prev.control-arrow {
    left: 50%;
    margin-left: 55px;
  }

  .control-dots {
    display: none;
  }

  .carousel-status {
    display: none;
  }

  /*-------------------------------------- 
   Pricing  Section
  ----------------------------------------*/

  .pricing_section_v2 .pricing_heading {
    background-image: none;
    padding: 30px 30px 0px 50px;
    text-align: left;
  }

  .pricing_section_v2 .pricing-box h4 {
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .pricing_section_v2 .pricing-box h2 {
    color: #333;
    margin-top: 32px;
    margin-bottom: 0px;
  }

  .pricing_section_v2 p {
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
  }

  .pricing_section_v2 .pricing-box ul {
    padding: 15px 10px 35px 50px;
  }

  .pricing_section_v2 .pricing-box h2 sub {
    letter-spacing: 0px;
    position: relative;
    top: 0px;
    left: 10px;
    display: inline-block;
  }

  .pricing_section_v2 .pricing-box .text-left {
    padding-bottom: 44px;
    padding-left: 50px;
  }

  /*-------------------------------------- 
   Video Section
  ----------------------------------------*/

  .layoutTwo .video-section#video,
  .video_land_two#video {
    padding: 120px 0px 150px;
    height: auto;
  }

  .layoutTwo #video .col-sm-12,
  .video_land_two#video .col-sm-12 {
    display: flex;
    flex-direction: column-reverse;
  }

  .layoutTwo .play-video .fa-play,
  .video_land_two#video .play-video .fa-play {
    background: #fff;
    color: #333;
  }

  /*-------------------------------------- 
   Testimonials Section
  ----------------------------------------*/

  .testimonials_sec_v2 {
    background-attachment: inherit;
    background-position: center;
    padding-bottom: 90px;
    padding-top: 70px;
  }

  .testimonials_sec_v2 .testimonial_content p,
  .testimonials_sec_v2 .cus-title span {
    color: #333 !important;
    text-align: left;
  }

  .testimonials_sec_v2 .testimonial_content p {
    margin-top: -8px;
  }

  .testimonials_sec_v2 .testimonial-box {
    padding: 0px 190px;
    margin-top: 0px;
  }

  .testimonials_sec_v2 .item {
    width: 83%;
    margin-left: 25%;
  }

  .testimonials_sec_v2 .testimonial-box p::before {
    display: none;
  }

  .testimonials_sec_v2 .base-header2 h3::after {
    width: 0px;
    height: 0px;
    left: 0%;
    margin-left: 0px;
    margin-bottom: 8px;
  }

  .testimonials_sec_v2 .base-header2::after {
    position: absolute;
    content: '';
    background: #b89841;
    width: 2px;
    height: 80px;
    left: 0%;
    margin-left: 0px;
    margin-top: -124px;
  }

  .testimonials_sec_v2 .base-header2 {
    text-align: left;
    margin-left: 42%;
    width: 50%;
    padding-bottom: 0px;
    position: relative;
  }

  .testimonials_sec_v2 .base-header2 h3 {
    padding-left: 20px;
  }

  /*-------------------------------------- 
   Client Section
  ----------------------------------------*/

  .client_section_v2 {
    padding-top: 0px;
  }

  .client_section_v2 .owl-stage-outer {
    border-bottom: 1px solid transparent;
    padding-bottom: 60px;
    border-top: 1px solid #f0f1f2;
    padding-top: 87px;
  }

  /*=======================================
   Index 3  
  =======================================*/

  /*-------------------------------------- 
   Slider Section
  ----------------------------------------*/

  .slides_wrapper_v3 .slider-1 .col-lg-6 {
    margin-left: 0%;
  }

  .slides_wrapper_v3 h2 {
    font-weight: normal;
  }

  .slides_wrapper_v3 .slide_bg_1 .col-sm-6 {
    margin-left: 0%;
  }

  .slides_wrapper_v3 h2 span {
    color: #b89841;
    font-weight: 700;
  }

  .slides_wrapper_v3 h2 {
    font-weight: 400;
  }

  /*-------------------------------------- 
   Work Section
  ----------------------------------------*/

  .work_section_v3 {
    padding-top: 65px;
    padding-bottom: 0px;
    margin-top: -10px;
    background: #fff;
  }

  .work_section_v3 .tab-content {
    overflow: hidden;
    border-bottom: 1px solid #f0f1f2;
    padding-bottom: 100px;
  }

  .work_section_v3 .base-header {
    text-align: left;
    padding-bottom: 28px;
  }

  .work_section_v3 .base-header h3 {
    margin-bottom: 25px;
    font-weight: 400;
  }

  .work_section_v3 .base-header h3:after {
    display: none;
  }

  .work_section_v3 .drak {
    font-weight: 600;
  }

  .work_section_v3 .row.projects-list .col-sm-4 {
    padding-right: 0px;
  }

  .work_section_v3 .projects-list .acount__nav {
    margin-bottom: 42px;
    justify-content: flex-start !important;
    margin-left: 5px;
  }

  .work_section_v3 .single-project-item {
    background-color: #ddd;
    background-position: center center;
    background-size: cover;
    height: 300px;
  }

  .work_section_v3 .col-sm-12:nth-child(4) .single-project-item {
    height: 610px;
  }

  .work_section_v3 .projects-list .nav-item {
    padding: 0px 0px;
    margin-right: 10px;
    border-radius: 50px;
    background: #dddd;
  }

  .work_section_v3 .projects-list .nav-link {
    border-radius: 50px;
    padding: 10px 25px;
  }

  .work_section_v3 .projects-list .nav-link.active {
    color: #fff;
    background: #b89841;
    border-radius: 50px;
    padding: 10px 25px;
  }

  .work_section_v3 .projects-titles {
    text-align: left;
    margin-left: 5px;
    margin-top: -70px;
  }

  .work_section_v3 .projects-titles li {
    background: #dddd;
    color: #333;
    margin-right: 10px;
    padding: 5px 25px;
    border-radius: 25px;
  }

  .work_section_v3 .projects-titles li:hover {
    background: #b89841;
    color: #fff;
  }

  .projects-titles li:hover::after {
    opacity: 0;
  }

  /*=======================================
   Index (Onepage)
  =======================================*/

  .layoutThree .single_slider {
    height: 880px;
  }

  /*-------------------------------------- 
   Menu Section
  ----------------------------------------*/

  .layoutThree .menu_area {
    background: transparent;
    position: absolute;
    width: 100%;
    box-shadow: none;
    transition: 0.4s;
    padding: 5px 0px;
  }

  .layoutThree .menu_area.sticky {
    position: fixed;
    top: 0;
    z-index: 9999;
    box-shadow: 0 3px 6px rgba(54, 54, 54, 0.08);
    background: #fff;
    transition: 0.4s;
    padding: 0px 0px;
  }

  .layoutThree .navigation {
    background: transparent;
  }

  .layoutThree .navigation ul li a {
    cursor: pointer;
  }

  /*=======================================
   Index v2 (Onepage)
  =======================================*/

  /* ------------------------------------------
          Offset Menu ::mobile Menu 
  -----------------------------------------------*/

  .offcanvasMobileMenu.active {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .offcanvasMobileMenu {
    position: fixed;
    z-index: 999999999999;
    top: 0;
    right: 0;
    width: 400px;
    max-width: 100%;
    height: 100vh;
    padding-left: 60px;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .offcanvasNavigation > ul li.menuItemHasChildren.active > .subMenu {
    visibility: visible;
    height: 100%;
    opacity: 1;
  }

  .offcanvasNavigation > ul li.menuItemHasChildren .subMenu {
    visibility: hidden;
    height: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    opacity: 0;
    margin-top: 0px;
  }

  .offcanvasNavigation ul.subMenu {
    margin-left: 25px;
    padding-left: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }

  .offcanvasNavigation ul li.menuItemHasChildren .menuExpand {
    line-height: 50px;
    position: absolute;
    top: -5px;
    right: auto;
    left: 95%;
    width: 30px;
    height: 50px;
    cursor: pointer;
    text-align: center;
  }

  .offcanvasNavigation ul li.menuItemHasChildren .menuExpand i {
    position: relative;
    display: block;
    width: 10px;
    margin-top: 25px;
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    border-bottom: 1px solid;
  }

  .offcanvasNavigation ul li.menuItemHasChildren.active > .menuExpand i::before {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  .offcanvasNavigation ul li.menuItemHasChildren .menuExpand i::before {
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    content: '';
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    border-bottom: 1px solid;
  }

  /* mobile menu */

  .mobile-aside-button {
    font-size: 34px;
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;
    color: #fff;
    border: none;
    background: none;
  }

  .mobile-aside-button svg {
    width: 100%;
    height: 100%;
    margin-top: 5px;
    vertical-align: top;
  }

  .mobile-aside-button:focus {
    outline: none;
  }

  /* Mobile Menu */
  /* offcanvas search */

  .offcanvasMobileSearchArea {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: calc(100% - 60px);
    margin-left: 60px;
    padding: 7px;
    background-color: #e6e6e6;
  }

  .offcanvasMobileSearchArea input {
    font-size: 16px;
    display: block;
    width: 100%;
    padding: 13px 29px;
    color: #222;
    border: none;
    background: #e6e6e6;
  }

  .offcanvasMobileSearchArea button {
    position: absolute;
    top: 50%;
    right: 20px;
    padding: 0;
    transform: translateY(-50%);
    color: #aaa;
    border: none;
    background: none;
  }

  .offcanvasMobileSearchArea button svg {
    font-size: 28px;
    line-height: 40px;
  }

  /* offcanvas mobile menu */

  .headerMobileNavigation {
    padding: 20px 0;
  }

  .headerMobileNavigation .mobileNavigation .headerCartIcon a span {
    left: 50%;
  }

  .mobileButtonWrapper button {
    font-size: 40px;
    padding: 0;
    color: #fff;
    border: none;
    background: none;
  }

  .offcanvasWidgetArea {
    margin-top: auto;
    margin-bottom: 35px;
  }

  .offCanvasContactWidget {
    margin-bottom: 20px;
  }

  .offCanvasContactWidget .headerContactInfo {
    flex-basis: 33.33%;
  }

  .offCanvasContactWidget .headerContactInfoList {
    padding-left: 0;
  }

  .offCanvasContactWidget .headerContactInfoList li {
    display: inline-block;
    margin-right: 25px;
    margin-bottom: 10px;
  }

  .offCanvasContactWidget .headerContactInfoList li a {
    color: #ca3c08;
  }

  .offCanvasContactWidget .headerContactInfoList li a:hover {
    color: #ca3c08;
  }

  .offCanvasContactWidget .headerContactInfoList li:last-child {
    margin-right: 0;
  }

  .offcanvasMobileMenu {
    position: fixed;
    z-index: 999999999999;
    top: 0;
    right: 0;
    width: 400px;
    max-width: 100%;
    height: 100vh;
    padding-left: 60px;
    transition: 0.6s;
    transform: translateX(100%);
  }

  .offcanvasMobileMenu.active {
    transform: translateX(0);
  }

  .offcanvasMobileMenu.inactive {
    transform: translateX(calc(100% + 60px));
  }

  .offcanvasMenuClose {
    font-size: 30px;
    line-height: 1;
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: 60px;
    height: 58px;
    padding: 0;
    text-align: center;
    color: #fff;
    border: none;
    background: #343538;
  }

  .offcanvasMenuClose:hover,
  .offcanvasMenuClose:focus {
    color: #fff;
    outline: none;
  }

  .offcanvasMenuClose i {
    font-size: 24px;
    transition: 0.3s;
    transform: rotate(0);
    position: relative;
    top: -1px;
  }

  .offcanvasMenuClose:hover i {
    transform: rotate(-90deg);
  }

  .offcanvasWrapper {
    overflow: auto;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 87px 0 rgba(0, 0, 0, 0.09);
  }

  .offcanvasInnerContent {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 70px 35px 0;
  }

  .offCanvasWidgetSocial a {
    font-size: 17px;
    margin: 0 10px;
  }

  .offCanvasWidgetSocial a:first-child {
    margin-left: 0;
  }

  /* offcanvas settings */

  .offcanvasSettings .offcanvasNavigation > ul > li > a {
    font-size: 12px;
    font-weight: 400;
    padding: 5px 0;
  }

  .offcanvasSettings .offcanvasNavigation > ul > li.menuItemHaschildren .menuExpand {
    top: -15px;
    height: 30px;
    margin-top: 0;
  }

  .offcanvasSettings .offcanvasNavigation ul.subMenu > li > a {
    padding: 5px 0;
  }

  .transparentBar {
    position: absolute;
    z-index: 999;
    right: 0;
    left: 0;
    width: 100%;
  }

  .transparentBar .headerTop {
    display: none !important;
  }

  .offcanvasNavigation {
    margin-bottom: 50px;
  }

  .offcanvasNavigation > ul {
    padding-left: 0;
  }

  .offcanvasNavigation > ul li.menuItemHasChildren .subMenu {
    visibility: hidden;
    height: 0;
    transition: 0.3s;
    opacity: 0;
  }

  .offcanvasNavigation > ul li.menuItemHasChildren.active > .subMenu {
    visibility: visible;
    height: 100%;
    opacity: 1;
  }

  .offcanvasNavigation > ul li > a {
    font-weight: 500;
    display: block;
    padding: 8px 0;
    color: #222;
  }

  .offcanvasNavigation > ul li > a:hover {
    color: #111;
  }

  .offcanvasNavigation ul.subMenu {
    margin-left: 25px;
    padding-left: 0;
    transition: 0.3s;
  }

  .offcanvasNavigation ul.subMenu > li > a {
    font-weight: 500;
    padding: 6px 0;
    color: #333;
  }

  .offcanvasNavigation ul.subMenu > li > a:hover {
    color: #111;
  }

  .offcanvasNavigation ul li a {
    text-transform: uppercase;
  }

  .offcanvasNavigation ul li.menuItemHasChildren {
    position: relative;
    display: block;
  }

  .offcanvasNavigation ul li.menuItemHasChildren a {
    display: inline-block;
  }

  .offcanvasNavigation ul li a:hover,
  .offcanvasNavigation ul li.menuItemHasChildren a:hover {
    color: #b89841;
  }

  .offcanvasNavigation ul li.menuItemHasChildren.active > .menuExpand i:before {
    transform: rotate(0);
  }

  .offcanvasNavigation ul li.menuItemHasChildren .menuExpand {
    line-height: 50px;
    position: absolute;
    top: -1px;
    right: auto;
    left: 95%;
    width: 30px;
    height: 50px;
    cursor: pointer;
    text-align: center;
  }

  .offcanvasNavigation ul li.menuItemHasChildren .menuExpand i {
    position: relative;
    display: block;
    width: 10px;
    margin-top: 20px;
    transition: all 250ms ease-out;
    border-bottom: 1px solid;
    color: #000;
  }

  .offcanvasNavigation ul li.menuItemHasChildren .menuExpand i:before {
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    content: '';
    transform: rotate(90deg);
    border-bottom: 1px solid;
  }

  @keyframes fadeInDown {
    0% {
      transform: translate3d(0, -100px, 0);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
  }

  /* 404 PAGE */

  .errorPage {
    padding: 235px 0 235px;
    background-size: cover;
  }

  .errorPage h2 {
    font-size: 90px;
    font-weight: 700;
    letter-spacing: 1.5px;
    margin-bottom: 32px;
    color: #fff;
    margin-top: 19px;
  }

  .errorPage span {
    font-size: 40px;
    color: #fff;
  }

  .errorPage p {
    margin-top: 10px;
    color: #fff6f6;
  }

  .errorPage .more-link {
    margin-top: 14px;
    background: #b89841;
    color: #fff;
  }

  .gray-bg {
    background-color: #f6f8fa;
  }

  //button[type='primary'] {
  //  background: #b89841;
  //  color: #fff;
  //  border-radius: 0.375rem;
  //
  //  &:hover {
  //    background-color: #333;
  //  }
  //}

  .description {
    padding: 30px 0;

    p {
      font-size: 1.1875rem;
      line-height: 1.6875rem;
    }
  }

  .btn {
    &-primary {
      background: ${(props) => props.theme.colors.blue017};
      color: #fff;
    }
  }
  .slick-slide {
    position: relative;
  }
  .slides_wrapper {
    overflow: hidden;
    background-color: #000;
  }

  section.bg-gray {
    background-color: ${(props) => props.theme.colors.grayf2f};
  }

  /* ------------------------------------------
        MarketIcon 
-----------------------------------------------*/
  .stock-market-icon {
    width: 50px;
    height: 26px;
    background-color: ${(props) => props.theme.colors.gray010};
    display: inline-block;
    position: relative;
    overflow: hidden;

    span {
      padding: 5px;
      font-size: 0.8rem;
      color: #fff;
      font-weight: 400;
      font-style: normal;
      display: inline-block;
      text-align: left;
      width: 100%;
    }

    &:after {
      content: '';
      display: block;
      width: 85%;
      height: 50px;
      position: absolute;
      background-color: ${(props) => props.theme.colors.gray102};
      top: 3px;
      left: 70%;
      transform: rotate(130deg);
    }

    &.smi-eq {
      background-color: ${(props) => props.theme.colors.eqbg};

      &:after {
        background-color: ${(props) => props.theme.colors.eqcorner};
      }
    }

    &.smi-fu {
      background-color: ${(props) => props.theme.colors.fubg};

      &:after {
        background-color: ${(props) => props.theme.colors.fucorner};
      }
    }

    &.smi-co {
      background-color: ${(props) => props.theme.colors.cobg};

      &:after {
        background-color: ${(props) => props.theme.colors.cocorner};
      }
    }

    &.smi-fxo {
      background-color: ${(props) => props.theme.colors.fxobg};

      &:after {
        background-color: ${(props) => props.theme.colors.fxocorner};
      }
    }

    &.smi-cfd {
      background-color: ${(props) => props.theme.colors.cfdbg};

      &:after {
        background-color: ${(props) => props.theme.colors.cfdcorner};
      }
    }

    &.smi-etf {
      background-color: ${(props) => props.theme.colors.etfbg};

      &:after {
        background-color: ${(props) => props.theme.colors.etfcorner};
      }
    }
  }

  .danger-alert {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 15px;
    background-color: #fff2f0;
    border: 1px solid #ffccc7;
    margin: 25px 0;
    border-radius: 6px;
    span {
      padding-right: 10px;
      font-size: 1.5rem;
      color: red;
    }
    p {
      font-weight: 600;
    }
  }

  section.transparent {
    background-color: transparent;
  }

  section.black,
  .section.black {
    background-color: ${(props) => props.theme.colors.gray101};

    h1,
    h2,
    h3,
    h4 {
      color: #fff;
    }

    p {
      color: #aaa;
    }

    .ant-alert-message {
      p {
        color: #fff;
      }
    }
  }

  section,
  .section {
    &.white {
      background: #fff;
    }
  }

  .text-field {
    padding: 15px;
    width: 100%;
    border-radius: 6px;

    &.has-error {
      border: 1px solid red;
    }
  }

  p.error {
    color: red !important;
  }

  .bg-orange-600 {
    &.text-white,
    svg {
      color: #031329 !important;
    }
  }

  .container-fluid {
    max-width: 1140px;
  }

  .container-navbar {
    max-width: 1280px;
  }

  .image-style-align-center {
   img {
     margin: auto;
   }
  }

  .ant-modal-body {
    h1,
    h2,
    h3,
    h4 {
      color: #fff;
    }
`}`

export default GlobalStyle
