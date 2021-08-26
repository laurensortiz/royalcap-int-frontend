import styled from 'styled-components'

const IconItem = ({ data }) => {
  return (
    <IconListSection className="col-md-3 col-sm-12" key={data.id}>
      <div className="">
        <div className="header">
          <span className={`icon-fea  ${data.icon}`}></span>
          <h5>{data.title}</h5>
        </div>

        {data.description && <p className="about_para">{data.description}</p>}
      </div>
    </IconListSection>
  )
}

const IconListSection = styled.div`
  margin-top: 50px;
  .header {
    display: flex;
    align-items: center;
  }
  h5 {
    font-size: 16px;
  }

  .icon-fea {
    font-size: 30px;
    color: ${(props) => props.theme.colors.yellowb89};
    margin-right: 10px;
  }
`

export default IconItem
