import NextImage from '../elements/image'
import styled from 'styled-components'
import { Markdown } from 'library'

const TradingType = ({ data }) => {
    return (
        <section className={`${data.bgClass || ''}`}>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-4 lg:justify-center">
                    {data.tradingCard.map((trading) => (
                        <div
                        key={trading.id}
                        className="border-2 py-4 px-4 flex-1 md:w-lg"
                        > 
                            <h3>{trading.title}</h3>
                            <RichText className="text-xl my-3">{trading.content}</RichText>
                            <NextImage media={trading.picture} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
  }

  const RichText = styled(Markdown)`
  p {
   font-size: 1em;
   line-height: 1.8em;
  }
`

  export default TradingType