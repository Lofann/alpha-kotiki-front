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