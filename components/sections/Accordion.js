import ButtonLink from '@/components/elements/button-link'
import { getButtonAppearance } from 'utils/button'

const Accordion = ({ data }) => {
  console.log('[=====  data  =====>')
  console.log(data)
  console.log('<=====  /data  =====]')

  return (
    <section className="bg-primary-800 py-20 text-center">
      <h2 className="title text-white mb-10">{data.title}</h2>
    </section>
  )
}

export default Accordion
