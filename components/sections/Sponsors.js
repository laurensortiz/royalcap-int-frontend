import NextImage from '../elements/image'

const Sponsors = ({ data }) => {
    return (
      <div className="container py-12">
        <div className="base-header2">
          <h1>{data.title}</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-center mt-6">
          {data.sponsorLogos.map((logo) => (
            <div
              key={logo.id}
              className="border-2 py-4 px-4 flex-1 md:w-lg"
            > 
              <NextImage media={logo.logo} />
            </div>
          ))}
        </div>
        <div className="mt-3">
          {data.content} 
        </div>
      </div>
    )
  }
  
  export default Sponsors