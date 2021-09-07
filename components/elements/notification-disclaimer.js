import { Markdown, Modal } from 'library'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const NotificationDisclaimer = ({
  data: {
    title,
    content,
    type,
    isAlwaysVisible,
    disclaimerID,
    disclaimerIsShown,
    btnCloseText,
    btnOkText,
    maskClosable,
    centered,
  },
}) => {
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(disclaimerIsShown || false)

  useEffect(function () {
    const savedDisclaimerId = window.localStorage.getItem('disclaimerId')
    if (!isAlwaysVisible && !isAlwaysVisible && savedDisclaimerId === disclaimerID) {
      setIsDisclaimerVisible(false)
    }
  }, [])

  useEffect(
    function () {
      const savedDisclaimerId = window.localStorage.getItem('disclaimerId')
      if (!isDisclaimerVisible && !isAlwaysVisible && savedDisclaimerId !== disclaimerID) {
        window.localStorage.setItem('disclaimerId', disclaimerID)
      }
    },
    [isDisclaimerVisible]
  )

  const handleDisclaimerVisible = () => {
    setIsDisclaimerVisible(false)
  }

  return isDisclaimerVisible ? (
    <ModalBase>
      <Modal
        title={title || ''}
        visible={isDisclaimerVisible}
        width={'90%'}
        centered={centered || false}
        okText={btnOkText || 'OK'}
        cancelText={btnCloseText || 'Cancel'}
        maskClosable={maskClosable || true}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { borderRadius: 6 } }}
        onOk={handleDisclaimerVisible}
        closable={false}
        zIndex={9999}
      >
        <Markdown>{content}</Markdown>
      </Modal>
    </ModalBase>
  ) : null
}

const ModalBase = styled.div`
  .ant-modal-body {
    h1,
    h2,
    h3,
    h4 {
      color: #fff;
    }
  }
`

export default NotificationDisclaimer
