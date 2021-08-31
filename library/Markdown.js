import parse, { attributesToProps, domToReact } from 'html-react-parser'
import MediaPath from 'helpers/mediaPath'
import { WarningOutlined } from '@ant-design/icons'
import { Link } from 'library'

export function Markdown({ children, ...props }) {
  return (
    <div {...props}>
      {parse(`${children}`, {
        replace: ({ attribs, children, name }) => {
          if (!attribs) {
            return
          }

          if (name === 'img') {
            const props = attributesToProps(attribs)
            const src = MediaPath(props.src)
            const newProps = {
              ...props,
              src,
            }
            return <img {...newProps} />
          }

          if (name === 'a') {
            const props = attributesToProps(attribs)

            return (
              <Link {...props} isButton={true} ghostprimary>
                {domToReact(children)}
              </Link>
            )
          }

          if (attribs.class === 'danger') {
            return (
              <div className={'danger danger-alert'}>
                <WarningOutlined />
                {domToReact(children)}
              </div>
            )
          }
        },
      })}
    </div>
  )
}
