import NextImage from '../elements/image'
import MediaPath from 'helpers/mediaPath'
import styled from 'styled-components'
import Markdown from 'react-markdown'

const InternalHero = ({ data }) => {
  return (
    <Header id="page-top" imagePath={MediaPath(data.img.url)}>
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
  height: 400px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.8337710084033614) 21%, rgba(0, 0, 0, 0) 87%);
  }
`

const Header = styled.header`
  background: url(${(props) => props.imagePath}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: hidden;
  color: #fff;
  box-sizing: border-box;
  height: 307px;
  width: 100%;
  position: relative;
`

const RichText = styled(Markdown)`
  h1 {
    color: ${(props) => (props.isDarkHero ? '#fff' : '#333')};
    font-size: 45px;
    line-height: 3.2rem;
    letter-spacing: 1px;
    padding-bottom: 31px;
    font-weight: 400;
    margin-bottom: 0;
    strong {
      color: ${(props) => props.theme.colors.yellowb89};
    }
  }
`

export default InternalHero
