import Markdown from 'react-markdown'
import styled from 'styled-components'
import { WarningOutlined } from '@ant-design/icons'

const HomeIntro = ({ data }) => {
  return (
    <Section className="footer-disclaimer gray-bg" id="disclaimer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 about_bottom_warp">
            <div className="about_list">
              {/* Start: Heading */}
              <div className="base-header2">
                <h3>
                  <Icon>
                    <WarningOutlined />
                  </Icon>
                  {data.title}
                </h3>
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
    </Section>
  )
}

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.gray010};
  color: #fff;

  h3 {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`

const Icon = styled.span`
  color: red;
  font-size: 30px;
  margin-right: 10px;
`

const RichText = styled(Markdown)`
  p {
    font-size: 1em;
    line-height: 1.8em;
  }
`

export default HomeIntro
