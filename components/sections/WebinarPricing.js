import NextImage from '../elements/image'
import styled from 'styled-components'
import { Markdown } from 'library'
import classNames from 'classnames'

const WebinarPricing = ({ data }) => {
  console.log('data: ', data);
  return (
    <div className="main-section" style={{ background: '#f4f4f6' }}>
      <div className="container py-12">
        <div className="base-header2">
          <h1>{data.title}</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-center mt-6">
          {data.pricingColumns.map((pricing) => (
            <div 
              key={pricing.id}             
              className={classNames(
                // Common classes
                'rounded-md border-2 py-4 px-4 flex-1 md:w-lg bg-gray-100 text-gray-900 border-gray-300',
              )}
            > 
              <NextImage media={pricing.pricingHero}/>
              <h3>{pricing.plan}</h3>
              <h5>{pricing.time}</h5>
              <RichText className="text-xl mt-3">
                {pricing.description}
              </RichText>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const RichText = styled(Markdown)`
  p {
   font-size: 1em;
   line-height: 1.8em;
  }
  .price {
    p {
        color: #36B5CD;
        &+p {
            color: #f77f02;
        }
    }
}
`

export default WebinarPricing