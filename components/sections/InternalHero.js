import MediaPath from 'helpers/mediaPath'
import styled, { css } from 'styled-components'
import { Markdown } from 'library'

const InternalHero = ({ data }) => {
  return (
    <Header
      id="page-top"
      imagePath={MediaPath(data.img.url)}
      isDarkHero={data.isDarkHero}
      isLanding={data.isLanding}
    >
      <HeroContainer>
        <div className="container" id="blog">
          <div className="row blog-header text-left">
            <div className="col-sm-12">
              <Markdown>{data.title}</Markdown>
              {data.description && (
                <div className="description ">
                  <Markdown className="text-xl">{data.description}</Markdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </HeroContainer>
    </Header>
  )
}

const HeroContainer = styled.div`
  background-color: rgb(0, 0, 0, 0.4);
  height: 100%;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 21%, rgba(0, 0, 0, 0) 87%);
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 19%, rgba(0, 0, 0, 0) 84%);
  }

  .description table {
    color: #fff;

  }
`

const Header = styled.header`
  background: url(${(props) => props.imagePath}) no-repeat;
  background-size: cover;
  //background-attachment: fixed;
  background-position: center 30%;
  overflow: hidden;
  color: #fff;
  box-sizing: border-box;
  width: 100%;
  position: relative;

  .container {
    top: 55%;
  }

  h1 {
    color: #333;
    font-size: 45px;
    line-height: 3.2rem;
    letter-spacing: 1px;

    font-weight: 400;
    margin-bottom: 0;

    strong {
      color: ${(props) => props.theme.colors.yellowb89};
    }

    ${(props) =>
      props.isDarkHero &&
      css`
        color: #fff;
      `}
  }

  ${(props) =>
    props.isLanding &&
    css`
      height: 600px;

      .container {
        top: 45%;
      }
    `}
`

export default InternalHero
