import styled from 'styled-components'
import { Markdown } from 'library'
const PageIntro = ({ data }) => {
  return (
    <section className="section">
      <div className="container text-left">
        <div className="row">
          <div className="col-md-12 col-sm-12 about-section">
            <div className="base-header">
              <small>{data.subTitle}</small>
              <h1>{data.title}</h1>
            </div>
            <div className="text-xl mb-6">
              <RichText className="text-xl">{data.description}</RichText>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  )
}

const RichText = styled(Markdown)`
  //p {
  //  font-size: 1em;
  //  line-height: 1.8em;
  //}
`

export default PageIntro
