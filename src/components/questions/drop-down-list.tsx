import { QuestionProps } from "./question-props";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { updateAnswers } from "../../store/action";
import { getAnswers } from "../../store/passing-survey-data/passing-survey.selectors";

export default function DropDownListQuestion({currentAnswers, currentQuestionId}: QuestionProps): JSX.Element {
  const dispatch = useAppDispatch()
  const savedAnswers = useAppSelector(getAnswers)
  const [answer, setAnswer] = useState<string | undefined>(savedAnswers.find((answer) => answer.questionId === currentQuestionId)?.values[0])

  useEffect(() => {
    if (answer) {
      dispatch(updateAnswers([...filterAnswers(), {questionId:currentQuestionId, values: [answer]}]))
    }
  }, [answer])

  const filterAnswers = () => {
    return savedAnswers.filter((answer) => answer.questionId !== currentQuestionId)
  }

  const selectChangeHandler = (answ : string) => {
    setAnswer(answ)
  }

  const disableOption = () => {
    return Boolean(answer)
  }

  return (
    <select className="form-select" aria-label="Select example" defaultValue='null' value={answer} onChange={(evt) => selectChangeHandler(evt.target.value)}>
      <option disabled={disableOption()} key={-1} value='null'>{'Выберите ответ'}</option>
      {currentAnswers.map((answer, index) => <option key={index} value={answer}>{answer}</option>)}
    </select>
  )
}