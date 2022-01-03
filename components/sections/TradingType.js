import NextImage from '../elements/image'

const TradingType = ({ data }) => {
    console.log('TradingType data: ', data);
    return (
        <div className="container py-12" style={{ background: '#f4f4f6' }}>
            <div className="flex flex-col lg:flex-row gap-4 lg:justify-center mt-6">
                {data.tradingType.map((trading) => (
                    <div
                    key={trading.id}
                    className="border-2 py-4 px-4 flex-1 md:w-lg"
                    > 
                        <h3>{trading.title}</h3>
                        <p>{trading.content}</p>
                        <NextImage media={logo.logo} />
                    </div>
                ))}
            </div>
        </div>
    )
  }

  export default TradingType