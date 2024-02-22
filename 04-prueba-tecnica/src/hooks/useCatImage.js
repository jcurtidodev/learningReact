import { useEffect, useState } from 'react'
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/firstsWords?fontSize=50&fontColor=red&width=500&height=500`

export function useCatImage ({ fact }) {
  const [imageUrl, setImgUrl] = useState()

  // setear img según datos
  useEffect(() => {
    if (!fact) return
    const firstsWords = fact.split(' ', 3).join(' ')
    const url = CAT_ENDPOINT_IMAGE_URL.replace('firstsWords', firstsWords)
    setImgUrl(url)
  }, [fact])

  return { imageUrl }
}