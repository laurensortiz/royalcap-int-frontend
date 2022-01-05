import NextImage from '../elements/image'
import styled from 'styled-components'
import { Card, Button, Markdown, Link } from 'library'

const Webinars = ({ data }) => {
    return (
      <div className="container py-12">
        <div className="base-header2">
          <h1>{data.title}</h1>
        </div>
        <div className="mt-3">
          <RichText className="text-xl">{data.content}</RichText>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-center mt-6">
            {data.columnText.map((column) => (
                <CardWrapper 
                    className="rounded-md border-2 py-4 px-4 flex-1 md:w-lg"
                    key={column.id}
                    title={column.title}
                    bordered={false}
                >
                    <RichText>{column.text}</RichText>
                </CardWrapper>
            ))}
        </div>
        <div className="flex justify-center mt-4">
            {data.btnLink.url && (
              <ButtonContainer>
                <Link href={data.btnLink.url} isButton={true}>
                  {data.btnLink.text}
                </Link>
              </ButtonContainer>
            )}
        </div>
      </div>
    )
  }

const RichText = styled(Markdown)`
  p {
   font-size: 1em;
   line-height: 1.8em;
  }
`

const CardWrapper = styled(Card)`
    background: #f3f4f6;
    color: #000;
    .ant-card-head-title {
        color: #000;
    }
`

const ButtonContainer = styled.div`
  text-align: center;
`

export default Webinars