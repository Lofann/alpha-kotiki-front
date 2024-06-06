import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { changeQuestionNumber } from "../../store/action";
import { SurveyCard } from "../../types/survey-card";
import { getAnswers, getQuestionNumber } from "../../store/passing-survey-data/passing-survey.selectors";
import { AppRoute } from "../../const";
import { addAnswers } from "../../store/api-action";
import { userId } from "../../mocks/user";

type PassingButtonsProps = {
  survey: SurveyCard
}

export default function PassingButtons({survey}: PassingButtonsProps): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const questionNumber = useAppSelector(getQuestionNumber)
  const savedAnswers = useAppSelector(getAnswers)
  const lastQuestionNumber = survey.questions.length - 1

  const BackButtonClickHandler = () => {
    dispatch(changeQuestionNumber(questionNumber - 1))
  }

  const NextButtonClickHandler = () => {
    if (questionNumber !== lastQuestionNumber) {
      dispatch(changeQuestionNumber(questionNumber + 1))
    } else {
      dispatch(addAnswers({userId: userId, answers: savedAnswers}))
      navigate(`/surveys/${survey.id}/${AppRoute.SurveyCompleting}`)
    }
  }

  const disableNextButton = () => {
    return questionNumber === lastQuestionNumber && savedAnswers.filter((item) => item.values.length !== 0).length !== survey.questions.length
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
        disabled={disableNextButton()}
        onClick={() => NextButtonClickHandler()}>{questionNumber !== lastQuestionNumber? 'Вперед' : 'Завершить'}</button>
    </div>
  )
}