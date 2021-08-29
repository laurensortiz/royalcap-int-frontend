import { useState } from 'react'
import styled from 'styled-components'
import Navbar from './elements/navbar'
import Footer from './Footer'
import NotificationBanner from './elements/notification-banner'
import Header from 'components/Header'
import FooterDisclaimer from 'components/sections/FooterDisclaimer'
import Widget from 'components/UI/Widget'

const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer, notificationBanner, footerDisclaimer, globalLinks } = global

  const [bannerIsShown, setBannerIsShown] = useState(notificationBanner.bannerIsShown || false)
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <WidgetContainer>
        <Widget />
      </WidgetContainer>
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner data={notificationBanner} closeSelf={() => setBannerIsShown(false)} />
        )}
        {/*<Header logo={navbar.logo} />*/}
        <Navbar
          logo={navbar.logo}
          navbar={navbar}
          pageContext={pageContext}
          globalLinks={globalLinks}
        />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}

      {footerDisclaimer && <FooterDisclaimer data={footerDisclaimer} />}

      <Footer logo={navbar.logo} footer={footer} />
    </div>
  )
}

const WidgetContainer = styled.div`
  height: 45px;
  overflow: hidden;
`

export default Layout
