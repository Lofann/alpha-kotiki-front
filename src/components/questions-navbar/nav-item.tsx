import cn from "classnames"
import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../hooks/store"
import { changeQuestionNumber } from "../../store/action"

type NavItemProps = {
  index: number
}

export default function NavItem({index}: NavItemProps): JSX.Element {
  const dispatch = useAppDispatch()
  const questionNumber = useAppSelector((state) => state.question)
  const savedAnswers = useAppSelector((state) => state.answers)

  return (
    <li 
      className={cn("question-item", {
        'active': questionNumber === index,
        'done': savedAnswers.find((savedAnswer) => savedAnswer.questionId === String(index)) && questionNumber !== index
      })}
      onClick={() => dispatch(changeQuestionNumber(index))}>
      <Link className="question-link" to="#">
        {index + 1}
      </Link>
    </li>
  )
}