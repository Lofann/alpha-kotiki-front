import cn from "classnames"
import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../hooks/store"
import { changeQuestionNumber } from "../../store/action"
import { getQuestionNumber, getAnswers } from "../../store/passing-survey-data/passing-survey.selectors"

type NavItemProps = {
  index: number
}

export default function NavItem({index}: NavItemProps): JSX.Element {
  const dispatch = useAppDispatch()
  const questionNumber = useAppSelector(getQuestionNumber)
  const savedAnswers = useAppSelector(getAnswers)

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