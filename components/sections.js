import { useRouter } from 'next/router'

import Pricing from './sections/Pricing'
import RichText from './sections/rich-text'
import LeadForm from './sections/lead-form'

import Hero from 'components/sections/hero'
import LargeVideo from 'components/sections/large-video'
import FeatureColumnsGroup from 'components/sections/feature-columns-group'
import FeatureRowsGroup from 'components/sections/feature-rows-group'
import BottomActions from 'components/sections/bottom-actions'
import TestimonialsGroup from 'components/sections/testimonials-group'
import HomeIntro from 'components/sections/HomeIntro'
import HomeSlider from 'components/sections/HomeSlider'
import CommoditiesIntroGroup from 'components/sections/CommoditiesIntroGroup'
import InternalHero from 'components/sections/InternalHero'
import PageIntro from 'components/sections/PageIntro'
import ProductFeature from 'components/sections/ProductFeature'
import OurPlatformFeature from 'components/sections/OurPlatformFeature'
import BrokerRegistrationFeature from 'components/sections/BrokerRegistrationFeature'
import ProductListFeature from 'components/sections/ProductListFeature'
import BankSlider from 'components/sections/BankSlider'
import SectionLayout from 'components/sections/SectionLayout'
import Alert from 'components/sections/Alert'
import EmbededCode from 'components/sections/EmbededCode'
import CountryListFeature from 'components/sections/CountryListFeature'
import SectionFeatureColumns from 'components/sections/SectionFeatureColumns'
import ContactForm from 'components/sections/ContactForm'
import AccountForm from 'components/sections/AccountForm'
import SectionTabs from 'components/sections/SectionTabs'

// Map Strapi sections to section components
const sectionComponents = {
  'sections.bank-slider': BankSlider,
  'sections.section-layout': SectionLayout,
  'sections.product-feature': ProductFeature,
  'sections.product-list-feature': ProductListFeature,
  'sections.open-account-feature': BrokerRegistrationFeature,
  'sections.our-platform': OurPlatformFeature,
  'sections.home-intro': HomeIntro,
  'sections.page-intro': PageIntro,
  'sections.home-slider': HomeSlider,
  'sections.internal-hero': InternalHero,
  'sections.commodities-intro': CommoditiesIntroGroup,
  'sections.hero': Hero,
  'sections.large-video': LargeVideo,
  'sections.feature-columns-group': FeatureColumnsGroup,
  'sections.feature-rows-group': FeatureRowsGroup,
  'sections.bottom-actions': BottomActions,
  'sections.testimonials-group': TestimonialsGroup,
  'sections.rich-text': RichText,
  'sections.pricing': Pricing,
  'sections.lead-form': LeadForm,
  'sections.html-embded': EmbededCode,
  'sections.alerts': Alert,
  'sections.country-feature': CountryListFeature,
  'sections.section-feature-columns': SectionFeatureColumns,
  'sections.contact-form': ContactForm,
  'sections.account-form': AccountForm,
  'sections.tabs': SectionTabs,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component]

  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

const PreviewModeBanner = () => {
  const router = useRouter()
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(router.asPath)}`

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{' '}
        <a className="underline" href={`/api/exit-preview?redirect=${router.asPath}`}>
          Turn off
        </a>
      </div>
    </div>
  )
}

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div className="flex flex-col">
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section sectionData={section} key={`${section.__component}${section.id}`} />
      ))}
    </div>
  )
}

export default Sections
