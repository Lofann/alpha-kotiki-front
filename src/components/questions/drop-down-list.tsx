import { QuestionProps } from "./question-props";
import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { updateAnswers } from "../../store/action";
import { getAnswers } from "../../store/passing-survey-data/passing-survey.selectors";

export default function DropDownListQuestion({currentAnswers, currentQuestionId}: QuestionProps): JSX.Element {
  const dispatch = useAppDispatch()
  const answerRef = useRef<HTMLSelectElement>(null)

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

  const selectChangeHandler = () => {
    if (answerRef.current !== null) {
      setAnswer(answerRef.current.value)
    }
  }

  const getOptionStatus = (answer: string) => {
    return answer === savedAnswers.find((savedAnswer) => savedAnswer.questionId === currentQuestionId)?.values[0]
  }

  const disableOption = () => {
    const l = savedAnswers.find((answer) => answer.questionId === currentQuestionId)
    return l?.values.length !== 0
  }

  return (
    <select className="form-select" aria-label="Select example" ref={answerRef} defaultValue='null' onChange={(evt) => selectChangeHandler()}>
      <option selected={!disableOption()} disabled={disableOption()} key={-1} value='null'>{'Выберите ответ'}</option>
      {currentAnswers.map((answer, index) => <option key={index} selected={getOptionStatus(answer)} value={answer}>{answer}</option>)}
    </select>
  )
}