import Markdown from 'react-markdown'
import styled from 'styled-components'
import IconItem from 'components/UI/iconItem'
const HomeIntro = ({ data }) => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 about_bottom_warp">
            <div className="about_list">
              {/* Start: Heading */}
              <div className="base-header2">
                <h1>
                  <small>Royal Capital</small>
                  {data.title}
                </h1>
              </div>
              <div className="description text-xl-center">
                <Markdown className="text-xl">{data.description}</Markdown>
              </div>
            </div>
          </div>
        </div>
        {data.reasonsList && (
          <div className="row">
            {data.reasonsList.map((item) => (
              <IconItem data={item} key={item.id} />
            ))}
          </div>
        )}
        {/* row */}
      </div>
      {/* container */}
    </section>
  )
}

export default HomeIntro
