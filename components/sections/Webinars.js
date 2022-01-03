import NextImage from '../elements/image'
import styled from 'styled-components'
import { Card, Button, Markdown } from 'library'

const Webinars = ({ data }) => {
    return (
      <div className="main-section" style={{ background: '#f4f4f6' }}>
        <div className="base-header2">
          <h1>{data.title}</h1>
        </div>
        <div className="mt-3">
          <RichText className="text-xl">{data.content}</RichText>
        </div>
        <div className="mt-4 gap-4">
            {data.columnText.map((column) => (
                <Card key={column.id} title={column.title} bordered={false}>
                    <p>{column.text}</p>
                </Card>
            ))}
        </div>
        <div className="flex justify-center mt-4">
            <Button
            type="submit"
            htmlType="submit"
            >
                Descargar Plataforma
            </Button>
        </div>
      </div>
    )
  }

const RichText = styled(Markdown)`
  p {
   font-size: 1em;
   line-height: 1.8em;
  }
    .price {
        p {
            color: red;
            &+p {
                color: blue;
            }
        }
    }
`

  export default Webinars