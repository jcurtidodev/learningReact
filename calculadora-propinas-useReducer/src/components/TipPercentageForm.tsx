import { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  }
]

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propina:</h3>
      <form className="flex flex-row justify-around">
        {
          tipOptions.map(tipOption => (
            <div className="space-x-2 flex items-center" key={tipOption.id}>
              <label>{tipOption.label}</label>
              <input
                className="text-blue-500 focus:ring-transparent w-3 h-3"
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={e => setTip(+e.target.value)}
                checked={tipOption.value === tip}
              />
            </div>
          ))
        }
      </form>
    </div>
  )
}
