import styled from 'styled-components'
import Navbar from './elements/navbar'
import Footer from './Footer'
import NotificationBanner from './elements/notification-banner'
import NotificationAlert from './elements/notification-alert'
import NotificationDisclaimer from './elements/notification-disclaimer'
import FooterDisclaimer from 'components/sections/FooterDisclaimer'
import Widget from 'components/UI/Widget'
import LeadForm from 'components/sections/lead-form'

const Layout = ({ children, global, pageContext }) => {
  const {
    navbar,
    footer,
    notificationBanner,
    notificationDisclaimer,
    footerDisclaimer,
    globalLinks,
    leadForm,
    notification,
  } = global

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NotificationDisclaimer data={notificationDisclaimer} />
      <NotificationBanner data={notificationBanner} />
      <WidgetContainer>
        <Widget />
      </WidgetContainer>
      {/* Aligned to the top */}
      <div className="flex-1">
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
      {leadForm && <LeadForm data={leadForm} />}
      {notification && <NotificationAlert data={notification} />}

      {footerDisclaimer && <FooterDisclaimer data={footerDisclaimer} />}

      <Footer logo={navbar.logo} footer={footer} contactInfo={global.contactInfo} />
    </div>
  )
}

const WidgetContainer = styled.div`
  height: 45px;
  overflow: hidden;
`

export default Layout
