import { Markdown } from 'library'

const TradingMarketsFeatures = ({ data }) => {
  return (
    <div className="container py-12">
      <div className="base-header2">
        <h1>{data.title}</h1>
      </div>
      <div className="mt-3">
        <Markdown className="text-xl">{data.content}</Markdown>
      </div>
    </div>
  )
}

export default TradingMarketsFeatures
