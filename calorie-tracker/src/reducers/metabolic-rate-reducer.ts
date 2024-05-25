import { Person } from "../types"

// Actions
export type MetabolicRateActions =
{ type: 'save-metabolic-rate', payload: { newPerson: Person } } |
{ type: 'set-activeId', payload: { id: Person['id'] } }

export type BMRState = {
  person: Person
  activeId: Person['id'],
}


// State inicial
export const initialRateState: BMRState = {
  person: {
    id: '',
    genre: '',
    weight: 0,
    height: 0,
    years: 0,
    BMR: null
  },
  activeId: ''
}

// Reducer
export const BMRReducer = (state: BMRState = initialRateState, action: MetabolicRateActions) => {

  if (action.type === 'save-metabolic-rate') {
    console.log('Guardando...')

    return {}
  }

  if (action.type === 'set-activeId') {
    return {
      ...state,
      activeId: action.payload.id
    }
  }

  return state
}
