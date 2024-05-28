import cn from "classnames";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { changeQuestionNumber } from "../../store/action";
import { SurveyCard } from "../../types/survey-card";

type PassingButtonsProps = {
  survey: SurveyCard
}

export default function PassingButtons({survey}: PassingButtonsProps): JSX.Element {
  const dispatch = useAppDispatch()
  const questionNumber = useAppSelector((state) => state.question)
  const lastQuestionNumber = survey.questions.length - 1

  const BackButtonClickHandler = () => {
    dispatch(changeQuestionNumber(questionNumber - 1))
  }

  const NextButtonClickHandler = () => {
    if (questionNumber !== lastQuestionNumber) {
      dispatch(changeQuestionNumber(questionNumber + 1))
    }
  }

  return (
    <div className="buttons">
      <button
        className={cn("btn btn-dflt", {
          'hidden': questionNumber === 0
        })}
        onClick={() => BackButtonClickHandler()}>Назад</button>
      <button
        className="btn btn-cta"
        onClick={() => NextButtonClickHandler()}>{questionNumber !== lastQuestionNumber? 'Вперед' : 'Завершить'}</button>
    </div>
  )
}