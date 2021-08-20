import { useRouter } from 'next/router'
import Hero from '@/components/sections/hero'
import LargeVideo from '@/components/sections/large-video'
import FeatureColumnsGroup from '@/components/sections/feature-columns-group'
import FeatureRowsGroup from '@/components/sections/feature-rows-group'
import BottomActions from '@/components/sections/bottom-actions'
import TestimonialsGroup from '@/components/sections/testimonials-group'

import HomeIntro from 'components/sections/HomeIntro'
import CommoditiesIntroGroup from 'components/sections/CommoditiesIntroGroup'
import Pricing from './sections/Pricing'

import RichText from './sections/rich-text'

import LeadForm from './sections/lead-form'

// Map Strapi sections to section components
const sectionComponents = {
  'sections.home-intro': HomeIntro,
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
}

// Display a section individually
const Section = ({ sectionData }) => {
  console.log('[=====  test  =====>')
  console.log(sectionData)
  console.log('<=====  /test  =====]')
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
