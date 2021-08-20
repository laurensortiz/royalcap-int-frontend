import Markdown from 'react-markdown'
import styled from 'styled-components'
const HomeIntro = ({ data }) => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 about_bottom_warp">
            <div className="about_list">
              {/* Start: Heading */}
              <div className="base-header2">
                <h3>
                  <small>Royal Capital</small>
                  {data.title}
                </h3>
              </div>
              <div className="text-xl mb-6 text-xl-center">
                <RichText className="text-xl">{data.description}</RichText>
              </div>
            </div>
          </div>

          {/*Start: About Image  */}
          <div className="col-md-12 col-sm-12">
            {/*  About Right Image  */}
            <img src="" alt="" />
          </div>
          {/*End: About Image  */}
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
