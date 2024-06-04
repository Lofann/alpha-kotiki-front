import { QuestionProps } from "./question-props";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { updateAnswers } from "../../store/action";
import { getAnswers } from "../../store/passing-survey-data/passing-survey.selectors";

export default function RadioButtonQuestion({currentAnswers, currentQuestionId}: QuestionProps): JSX.Element {
  const dispatch = useAppDispatch()
  const [answer, setAnswer] = useState<string>()
  const savedAnswers = useAppSelector(getAnswers)

  useEffect(() => {
    if (answer) {
      dispatch(updateAnswers([...filterAnswers(), {questionId:currentQuestionId, values: [answer]}]))
    }
  }, [answer])

  const filterAnswers = () => {
    return savedAnswers.filter((answer) => answer.questionId !== currentQuestionId)
  }

  const answerClickHandler = (answer: string) => {
    setAnswer(answer)
  }

  return (
    <>
      {currentAnswers.map((answer, index) =>
        <div key={index} className="form-check" onChange={() => answerClickHandler(answer)}>
          <input
            className="form-check-input"
            checked={answer === savedAnswers.find((answer) => answer.questionId === currentQuestionId)?.values[0]}
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioDefault${answer}`}
          />
          <label className="form-check-label" htmlFor={`flexRadioDefault${answer}`}>
            {answer}
          </label>
        </div>
      )}
    </>
  )
}