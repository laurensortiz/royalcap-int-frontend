import Markdown from 'react-markdown'
import styled from 'styled-components'
const HomeIntro = ({ data }) => {
  return (
    <section className="footer-disclaimer gray-bg" id="disclaimer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 about_bottom_warp">
            <div className="about_list">
              {/* Start: Heading */}
              <div className="base-header2">
                <h3>{data.title}</h3>
              </div>
              <div className="mb-6 text-justify">
                <RichText>{data.description}</RichText>
              </div>
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
  p {
    font-size: 1em;
    line-height: 1.8em;
  }
`

export default HomeIntro
