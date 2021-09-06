import loadable from '@loadable/component'

export const DynamicIcon = loadable((props) =>
  import(`@ant-design/icons/es/icons/${props.type}.js`).catch((err) =>
    import(`@ant-design/icons/es/icons/WarningOutlined.js`)
  )
)
