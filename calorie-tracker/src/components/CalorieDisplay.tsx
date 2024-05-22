type CalorieDisplayProps = {
  calories: number
  text: string
  category: number
}

export default function CalorieDisplay({ calories, text, category }: CalorieDisplayProps) {

  const getColorClasses = () => {
    let textColor: string = ''
    switch (category) {
      case 1:
        textColor = 'text-lime-500'
        break;
      case 2:
        textColor = 'text-orange-500'
        break;
      case 0:
        textColor = 'text-white'
        break;
    }
  
    return textColor
  }

  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center capitalize">
      <span className={`font-bold text-6xl ${getColorClasses()}`}>
        {calories}
      </span>
      {text}
    </p>
  )
}
