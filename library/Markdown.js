import parse, { attributesToProps, domToReact } from 'html-react-parser'
import MediaPath from 'helpers/mediaPath'
import { WarningOutlined } from '@ant-design/icons'
import { Link } from 'library'
import { fetchAPI } from 'utils/api'
import { useEffect } from 'react'

export function Markdown({ children, ...props }) {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const eso = await fetchAPI('/upload/files/sectorizacion_03e3258e49.pdf', {
  //         method: 'GET',
  //       })
  //       console.log('[=====  ero  =====>')
  //       console.log(eso)
  //       console.log('<=====  /ero  =====]')
  //     } catch (err) {
  //       console.log('[=====  err  =====>')
  //       console.log(err)
  //       console.log('<=====  /err  =====]')
  //     }
  //   }
  //
  //   fetchData()
  // }, [])

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

            // if (props.download) {
            //   const fileName = props.href ? props.href.split('/')[2] : ''
            //   const mediaPath = MediaPath(`${fileName}`, true)
            //
            //   return (
            //     <Link href={`${mediaPath}`} isButton={true}>
            //       {fileName}
            //     </Link>
            //   )
            // }

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
