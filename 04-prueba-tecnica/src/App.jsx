import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDOPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/firstsWords?fontSize=50&fontColor=red&width=500&height=500`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImgUrl] = useState()
  
  // recuperar los datos
  useEffect(() => {
    fetch(CAT_ENDOPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])
  // setear img según datos
  useEffect(() => {
    if (!fact) return
    const firstsWords = fact.split(' ', 3).join(' ')
    const url = CAT_ENDPOINT_IMAGE_URL.replace('firstsWords', firstsWords)
    setImgUrl(url)
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}