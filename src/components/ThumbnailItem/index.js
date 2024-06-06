// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, displayImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const onThumbnail = () => {
    displayImage(id)
  }

  return (
    <li>
      <button className="button" type="submit" onClick={onThumbnail}>
        <img
          className="thumbnail-img"
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
