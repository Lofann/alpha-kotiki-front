import { QuestionProps } from "./question-props";
import { useRef } from "react";

export default function CheckBoxQuestion({currentAnswers: answers}: QuestionProps): JSX.Element {
  const answerRef = useRef<number[]>([])

  const answerClickHandler = (index: number) => {
    if (answerRef.current.includes(index)) {
      const deleteIndex = answerRef.current.indexOf(index)
      answerRef.current.splice(deleteIndex, 1)
    } else answerRef.current.push(index)
  }

  return (
    <>
      {answers.map((answer,index) =>
        <div key={index} className="form-check" onChange={() => answerClickHandler(index)}>
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id={`flexCheck${answer}`}
          />
          <label className="form-check-label" htmlFor={`flexCheck${answer}`}>
            {answer}
          </label>
        </div>
      )}
    </>
  )
}