import { Dispatch, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { MetabolicRateActions, BMRState } from "../reducers/metabolic-rate-reducer"
import { Person } from "../types"

type FormProps = {
  dispatch: Dispatch<MetabolicRateActions>,
  state: BMRState
}

const InitalPerson: Person = ({
  id: uuidv4(),
  genre: '',
  weight: 0,
  height: 0,
  years: 0,
  BMR: null
})

export default function FormBasalMetabolicRate({dipatch, state} : FormProps) {
  
  const [BMR, setBMR] = useState<Person>(InitalPerson)
  
  return (
    <div>
      <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        // TODO POR AQUÍ
      </form>
      
    </div>
  )
}
