import classNames from 'classnames'
import { MdClose } from 'react-icons/md'
import { Markdown } from 'library'
import { useEffect, useState } from 'react'

const NotificationBanner = ({ data: { text, type, isAlwaysVisible, bannerID, bannerIsShown } }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(bannerIsShown || false)

  useEffect(function () {
    const savedBannerId = window.localStorage.getItem('bannerId')
    if (!isAlwaysVisible && !isAlwaysVisible && savedBannerId === bannerID) {
      setIsBannerVisible(false)
    }
  }, [])

  useEffect(
    function () {
      const savedBannerId = window.localStorage.getItem('bannerId')
      if (!isBannerVisible && !isAlwaysVisible && savedBannerId !== bannerID) {
        window.localStorage.setItem('bannerId', bannerID)
      }
    },
    [isBannerVisible]
  )

  const handleBannerVisible = () => {
    setIsBannerVisible(false)
  }

  return isBannerVisible ? (
    <div
      className={classNames(
        // Common classes
        'text-white px-2 py-2',
        {
          // Apply theme based on notification type
          'bg-blue-600': type === 'info',
          'bg-orange-600': type === 'warning',
          'bg-red-600': type === 'alert',
        }
      )}
    >
      <div className="container-fluid flex flex-row justify-between items-center ">
        <div className="rich-text-banner flex-1">
          <Markdown>{text}</Markdown>
        </div>
        <button onClick={handleBannerVisible} className="px-1 py-1 flex-shrink-0">
          <MdClose className="h-6 w-auto" color="#fff" />
        </button>
      </div>
    </div>
  ) : null
}

export default NotificationBanner
