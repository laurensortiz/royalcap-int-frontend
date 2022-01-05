import NextImage from '../elements/image'
import { Row, Col } from 'library'

const Sponsors = ({ data }) => {
    return (
      <div className="container py-12">
        <div className="base-header2">
          <h1>{data.title}</h1>
        </div>
        <Row justify="center" align="middle">
          {data.sponsorLogos.map((logo) => (
            <Col span={4} className="mr-5">
              <NextImage media={logo.logo} />
            </Col>
          ))}
        </Row>
        <div className="mt-3">
          {data.content} 
        </div>
      </div>
    )
  }
  
  export default Sponsors