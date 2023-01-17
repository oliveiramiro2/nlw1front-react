import "./Habit.css"

interface HabitProps {
  completed: number;
}

export function Habit(props: HabitProps) {
  return (
    <p className="habit">{props.completed}</p>
  )
}