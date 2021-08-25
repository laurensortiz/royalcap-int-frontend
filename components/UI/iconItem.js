const IconItem = ({ data }) => {
  return (
    <div className="col-md-3 col-sm-12" key={data.id}>
      <div className="about_list">
        <div className={`icon-fea  ${data.icon}`}></div>
        <h5>{data.title}</h5>
        {data.description && <p className="about_para">{data.description}</p>}
      </div>
    </div>
  )
}

export default IconItem
