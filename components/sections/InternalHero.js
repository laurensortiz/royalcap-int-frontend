import NextImage from '../elements/image'
import MediaPath from 'helpers/mediaPath'
import styled from 'styled-components'
import Markdown from 'react-markdown'

const InternalHero = ({ data }) => {
  return (
    <Header id="page-top" className="blog-banner" imagePath={MediaPath(data.img.url)}>
      <HeroContainer>
        <div className="container" id="blog">
          <div className="row blog-header text-left">
            <div className="col-sm-12">
              <RichText isDarkHero={data.isDarkHero}>{data.title}</RichText>
            </div>
          </div>
        </div>
      </HeroContainer>
    </Header>
  )
}

const HeroContainer = styled.div`
  background-color: rgb(0, 0, 0, 0.4);
  height: 350px;
`

const Header = styled.header`
  background: url(${(props) => props.imagePath}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
`

const RichText = styled(Markdown)`
  p {
    color: ${(props) => (props.isDarkHero ? '#fff' : '#333')};
    text-transform: capitalize;
    font-size: 45px;
    line-height: 3.2rem;
    letter-spacing: 1px;
    padding-bottom: 31px;
    font-weight: 700;
    margin-bottom: 0;
    font-family: Poppins, sans-serif;
    strong {
      color: ${(props) => props.theme.colors.yellowb89};
    }
  }
`

export default InternalHero
