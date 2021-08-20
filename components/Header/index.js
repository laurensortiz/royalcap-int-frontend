import React from 'react'
import Link from 'next/link'
import NextImage from 'components/elements/image'

const Index = ({ logo }) => {
  return (
    <div className="header_top_area">
      <div className="container">
        <div className="row">
          {/* SOCIAL ICON */}
          <div className="colm">
            <div className="header_social">
              <Link href="/">
                <a className="h-8 w-32">
                  <NextImage width="228" height="52" media={logo} />
                </a>
              </Link>
            </div>
          </div>

          {/* Address / Phone / Email*/}
          <div className="colm">
            <div className="header_wrapper_1">
              <ul>
                <li>
                  <i className="icon_phone"></i> +506 2505 5488
                </li>
                <li>
                  {' '}
                  <i className="icon_mail_alt"></i>info@royalcap-int.com
                </li>
              </ul>
            </div>
          </div>
          {/* End: Quote button */}
        </div>
      </div>
    </div>
  )
}

export default Index
