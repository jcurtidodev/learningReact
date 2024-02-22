import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
    // o getRandomFact().then(setFact)
  }

  // recuperar los datos
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}