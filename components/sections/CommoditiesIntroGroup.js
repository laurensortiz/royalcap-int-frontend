import MediaPath from 'helpers/mediaPath'
import styled from 'styled-components'

const Commodity = ({ thumb, title, description, link }) => {
  return (
    <div className="col-md-4 col-sm-12 about_v2_list">
      <ImageCard className="about_img" imagePath={MediaPath(thumb.url)} />
      <div className="about_v2__para">
        <h5>{title}</h5>
        <p>{description} </p>
        {link && (
          <a href={link.url} className="about_read">
            {link.text} <span className="fa fa-angle-double-right" />
          </a>
        )}
      </div>
    </div>
  )
}

const CommoditiesIntroGroup = ({ data }) => {
  return (
    data &&
    data.commodity.length > 0 && (
      <section className="commodities_section_v2 gray-bg" id="commodities">
        <div className="container">
          <div className="row">
            {data.commodity.map(({ thumb, title, description, id, link }) => (
              <Commodity
                key={id}
                thumb={thumb}
                title={title}
                description={description}
                link={link}
              />
            ))}
          </div>
        </div>
      </section>
    )
  )
}

const ImageCard = styled.div`
  width: 100%;
  height: 210px;
  background: url(${(props) => props.imagePath}) no-repeat;
  background-size: cover;
`

export default CommoditiesIntroGroup
