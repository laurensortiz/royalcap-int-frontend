const TradingMarketsFeatures = ({ data }) => {
  return (
    <div className="container py-12">
      <div className="base-header2">
        <h1>{data.title}</h1>
      </div>
      <div className="mt-3">
        <RichText className="text-xl">{data.content}</RichText>
      </div>
    </div>
  )
}

export default TradingMarketsFeatures
