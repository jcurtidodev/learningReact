import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts.js'

// const CAT_ENDOPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/firstsWords?fontSize=50&fontColor=red&width=500&height=500`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImgUrl] = useState()

  // recuperar los datos
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
    // sería los mismo hacer 
    // getRandomFact().then(setFact)
    // ya que le estarías pasando todos los parámetros, aún así no se acaba de considerar buenas prácticas
  }, [])

  // setear img según datos
  useEffect(() => {
    if (!fact) return
    const firstsWords = fact.split(' ', 3).join(' ')
    const url = CAT_ENDPOINT_IMAGE_URL.replace('firstsWords', firstsWords)
    setImgUrl(url)
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}