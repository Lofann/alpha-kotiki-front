import { QuestionProps } from "./question-props";
import { useState, useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { updateAnswers } from "../../store/action";
import { filterAnswers } from "../../utils";
import { getAnswers } from "../../store/passing-survey-data/passing-survey.selectors";

export default function CheckBoxQuestion({currentAnswers, currentQuestionId}: QuestionProps): JSX.Element {
  const dispatch = useAppDispatch()
  const savedAnswers = useAppSelector(getAnswers)
  const [answers, setAnswers] = useState<string[] | undefined>(savedAnswers.find((answer) => answer.questionId === currentQuestionId)?.answers)
  
  useEffect(() => {
    if (answers) {
      dispatch(updateAnswers([...filterAnswers(savedAnswers, currentQuestionId), {questionId:currentQuestionId, answers: answers}]))
    }
  }, [answers])

  const answerClickHandler = (answer: string) => {
    if (answers) {
      if (answers.filter((item) => item === answer).length !== 0) {
        setAnswers([...answers.filter((item) => item !== answer)])
      } else setAnswers([...answers, answer])
    } else setAnswers([answer])
  }

  const getCheckboxStatus = (answer: string) => {
    if (answers) {
      return Boolean(answers.find((item) => item === answer))
    }

    return false
  }

  return (
    <>
      {currentAnswers.map((answer,index) =>
        <div key={index} className="form-check" onChange={() => answerClickHandler(answer)}>
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id={`flexCheck${answer}`}
            checked={getCheckboxStatus(answer)}
          />
          <label className="form-check-label" htmlFor={`flexCheck${answer}`}>
            {answer}
          </label>
        </div>
      )}
    </>
  )
}