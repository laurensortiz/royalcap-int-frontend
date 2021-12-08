import styled from 'styled-components'
import Navbar from './elements/navbar'
import Footer from './Footer'
import NotificationBanner from './elements/notification-banner'
import NotificationAlert from './elements/notification-alert'
import NotificationDisclaimer from './elements/notification-disclaimer'
import FooterDisclaimer from 'components/sections/FooterDisclaimer'
import Widget from 'components/UI/Widget'
import LeadForm from 'components/sections/lead-form'
import getFeatureFlag from 'helpers/getFeatureFlag'

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
    featureFlag,
  } = global

  const isRussianActive = getFeatureFlag(featureFlag, 'russianLang')

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
          featureFlag={featureFlag}
        />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      {!isRussianActive.isActive && leadForm && <LeadForm data={leadForm} />}
      {notification && <NotificationAlert data={notification} />}

      {!isRussianActive.isActive && footerDisclaimer && (
        <FooterDisclaimer data={footerDisclaimer} />
      )}

      {!isRussianActive.isActive && (
        <Footer logo={navbar.logo} footer={footer} contactInfo={global.contactInfo} />
      )}
    </div>
  )
}

const WidgetContainer = styled.div`
  height: 45px;
  overflow: hidden;
`

export default Layout
