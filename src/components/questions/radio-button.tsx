import { QuestionProps } from "./question-props";
import { useRef } from "react";

export default function RadioButtonQuestion({currentAnswers: answers}: QuestionProps): JSX.Element {
  const answerRef = useRef<number>(-1)

  const answerClickHandler = (index: number) => {
    answerRef.current = index
  }

  return (
    <>
      {answers.map((answer, index) =>
        <div key={index} className="form-check" onChange={() => answerClickHandler(index)}>
          <input
            className="form-check-input"
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