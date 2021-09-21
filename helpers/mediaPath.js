import { getStrapiMedia } from 'utils/media'

const MediaPath = (url, isFile) => {
  return getStrapiMedia(url, isFile)
}

export default MediaPath
