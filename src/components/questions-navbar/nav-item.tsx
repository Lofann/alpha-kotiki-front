import cn from "classnames"
import { Link } from "react-router-dom"
import { Question } from "../../types/question"
import { useAppSelector, useAppDispatch } from "../../hooks/store"
import { changeQuestionNumber } from "../../store/action"

type NavItemProps = {
  question: Question,
  index: number
}

export default function NavItem({question, index}: NavItemProps): JSX.Element {
  const dispatch = useAppDispatch()
  const questionNumber = useAppSelector((state) => state.question)

  return (
    <li 
      className={cn("question-item", {
        'active': questionNumber === index
      })}
      onClick={() => dispatch(changeQuestionNumber(index))}>
      <Link className="question-link" to="#">
        {index + 1}
      </Link>
    </li>
  )
}