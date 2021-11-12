import { useState } from 'react'

const HORIZONTAL_PLACE_HOLDER_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
const VERTICAL_PLACE_HOLDER_AVATAR = 'https://via.placeholder.com/300x200?text=Placeholder'
const useUploadImage = ({ type }) => {
  const placeholder = type === 'vertical' ? VERTICAL_PLACE_HOLDER_AVATAR : HORIZONTAL_PLACE_HOLDER_AVATAR
  const [imageFile, setImageFile] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(placeholder)

  const handleUploadImage = (event) => {
    const file = event.target.files[0]
    setImageFile(file)
    var reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => setImageUrl(reader.result)
  }

  return { imageUrl, imageFile, handleUploadImage }
}

export default useUploadImage
