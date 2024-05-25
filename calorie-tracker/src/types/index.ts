export type Category = {
  id: number,
  name: string
}

export type Activity = {
  id: string,
  category: number,
  name: string,
  calories: number
}

export type Person = {
  id: string,
  genre: string,
  weight: number,
  height: number,
  years: number,
  BMR: number | null
}