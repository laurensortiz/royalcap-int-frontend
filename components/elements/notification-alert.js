import { Markdown, notification, DynamicIcon } from 'library'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const NotificationAlert = ({
  data: {
    description,
    message,
    type,
    isAlwaysActive,
    notificationID,
    isActive,
    duration,
    confirmBtnText,
    icon,
  },
}) => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(isActive || false)
  const router = useRouter()

  useEffect(function () {
    const savedNotificationId = window.localStorage.getItem('notificationId')
    if (!isAlwaysActive && !isAlwaysActive && savedNotificationId === notificationID) {
      setIsNotificationVisible(false)
    }
  }, [])

  useEffect(
    function () {
      const savedNotificationId = window.localStorage.getItem('notificationId')
      if (!isNotificationVisible && !isAlwaysActive && savedNotificationId !== notificationID) {
        window.localStorage.setItem('notificationId', notificationID)
      }
    },
    [isNotificationVisible]
  )

  useEffect(
    function () {
      const savedNotificationId = window.localStorage.getItem('notificationId')
      if (isNotificationVisible && savedNotificationId !== notificationID) {
        const btn =
          type === 'newsletter' ? (
            <Button type="primary" onClick={() => handleConfirm()}>
              {confirmBtnText || ''}
            </Button>
          ) : null
        notification.open({
          message,
          description: <Markdown>{description}</Markdown>,
          onClick: () => {
            handleDisclaimerVisible()
          },
          duration,
          btn,
          icon: icon ? <DynamicIcon type={icon} style={{ color: '#0170c7' }} /> : null,
        })
      }
    },
    [isNotificationVisible]
  )

  const handleDisclaimerVisible = () => {
    setIsNotificationVisible(false)
  }

  const handleConfirm = () => {
    notification.destroy()
    router.push('#newsletter')
  }

  return null
}

const Button = styled.button`
  padding: 10px 20px;
  text-align: center;
  border-radius: 6px;
  font-weight: 600;
  background: #0170c7;
`

export default NotificationAlert
