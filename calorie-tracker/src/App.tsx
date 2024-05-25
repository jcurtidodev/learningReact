import { useReducer, useEffect, useMemo } from 'react'
import FormTracker from './components/FormTracker'
import CalorieTracker from './components/CalorieTracker'
// import FormBasalMetabolicRate from './components/FormBasalMetabolicRate'
import { activityReducer, initialActivityState } from './reducers/activity-reducer'
// import { BMRReducer, initialRateState } from './reducers/metabolic-rate-reducer'
import ActivityList from './components/ActivityList'


function App() {

  const [activityState, dispatchActivityState] = useReducer(activityReducer, initialActivityState)
  // const [BMRState, dispatchBMRState] = useReducer(BMRReducer, initialRateState)

  // console.log('result' + BMRState === null)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activityState.activities))
  }, [activityState.activities])

  const canRestartApp = useMemo(() => activityState.activities.length > 0, [activityState.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorías
          </h1>

          <button
            className='bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-50'
            disabled={!canRestartApp}
            onClick={() => dispatchActivityState({ type: 'restart-app' })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      {/* 
        // TODO Ternaria para renderizar FormBasalMetabolicRaterm o FormTracker
        BMRState === null ? // TODO Y POR AQUÍ
          <div>
            <section className="bg-lime-500 py-20 px-5">
              <div className="max-w-4xl mx-auto">
                <FormBasalMetabolicRate
                  dispatch={dispatchBMRState}
                  state={BMRState}
                />
              </div>
            </section>
          </div>
          // <BMRDisplay
          : */}
          <div>
            <section className="bg-lime-500 py-20 px-5">
              <div className="max-w-4xl mx-auto">
                <FormTracker
                  dispatch={dispatchActivityState}
                  state={activityState}
                />
              </div>
            </section>

            <section className="bg-gray-800 py-10">
              <div className="max-w-4xl mx-auto">
                <CalorieTracker
                  activities={activityState.activities}
                />
              </div>
            </section>

            <section className="p-10 mx-auto max-w-4xl">
              <ActivityList
                activities={activityState.activities}
                dispatch={dispatchActivityState}
              />
            </section>
          </div>

      {/* } */}


    </>
  )
}

export default App
