import NextImage from '../elements/image'
import styled from 'styled-components'
import { Markdown } from 'library'
import classNames from 'classnames'
import MediaPath from 'helpers/mediaPath'

const WebinarPricing = ({ data }) => {
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
                'rounded-md border-2 py-4 px-4 flex-1 md:w-lg bg-gray-100 text-gray-900 border-gray-300'
              )}
            >
              <ImageCard className="about_img" imagePath={MediaPath(pricing.pricingHero.url)} />
              <h3 className="mt-3">{pricing.plan}</h3>
              <h5>{pricing.time}</h5>
              <RichText className="text-xl mt-3">{pricing.description}</RichText>
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
      color: #36b5cd;
      & + p {
        color: #f77f02;
      }
    }
  }
`

const ImageCard = styled.div`
  width: 100%;
  height: 210px;
  background: url(${(props) => props.imagePath}) no-repeat;
  background-size: cover;
`

export default WebinarPricing
