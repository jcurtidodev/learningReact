import { useState } from "react"

export default function BudgetForm() {
  
  const [budget, setBudget] = useState(0)

  const handleBudgetValue = () => {
    if (budget === 0)
      return ""
    else
      return budget.toString()
  }

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (budget !== 0)
      return
    e.target.value = ""
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "0")
      e.target.value = ""
    else
    e.target.value = budget.toString()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault()

    console.log(budget)
  }


  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
          Definir Presupuesto
        </label>
        <input id="budgetID"
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Especifica tu presupesto"
          name="budget"
          value={handleBudgetValue()}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>

      <input type="submit"
        value="Definir"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full h-10 text-white font-black uppercase"
        onClick={handleSubmit}
        />
    </form>
  )
}
