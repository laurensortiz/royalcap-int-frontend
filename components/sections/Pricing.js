import { MdCheckBox } from 'react-icons/md'
import classNames from 'classnames'
import Currency from 'utils/currency'
import styled from 'styled-components'
import { Link } from 'library'

const Pricing = ({ data }) => {
  return (
    <div className="container py-12">
      <div className="base-header2">
        <h1>
          <small>{data.smallTitle}</small>
          {data.title}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:justify-center mt-6">
        {data.plans.map((plan) => (
          <div
            key={plan.id}
            className={classNames(
              // Common classes
              'rounded-md border-2 py-4 px-4 flex-1 md:w-lg',
              // Normal plan
              {
                'bg-gray-100 text-gray-900 border-gray-300': !plan.isRecommended,
              },
              // Recommended plan
              {
                'bg-primary-100 text-primary-900 border-primary-300': plan.isRecommended,
              }
            )}
          >
            <h2 className="text-2xl">{plan.name}</h2>
            <p
              className={classNames('mt-4 text-lg', {
                'text-primary-700': plan.isRecommended,
                'text-gray-700': !plan.isRecommended,
              })}
            >
              {plan.description}
            </p>
            <p className="text-3xl mt-4">
              <PriceText>
                {plan.price === 0 ? 'Free ' : `${Currency.format(plan.price)} `}
              </PriceText>
              <span className="text-base font-medium">{plan.pricePeriod}</span>
            </p>
            {plan.features.length > 0 && (
              <FeatureList className="mt-4 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li className="flex flex-row justify-between items-center" key={feature.id}>
                    <span>{feature.name}</span>
                    <MdCheckBox className="h-6 w-auto text-gray-900" />
                  </li>
                ))}
              </FeatureList>
            )}
            {plan.btnLink.url && (
              <ButtonContainer>
                <Link href={plan.btnLink.url} isButton={true} target={'_blank'}>
                  {plan.btnLink.text}
                </Link>
              </ButtonContainer>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const PriceText = styled.span`
  font-size: 1.7rem;
`

const FeatureList = styled.ul`
  min-height: 300px;
`

const ButtonContainer = styled.div`
  text-align: center;
`

export default Pricing
