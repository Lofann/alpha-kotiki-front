import { QuestionProps } from "./question-props";

export default function RadioButtonQuestion({answers}: QuestionProps): JSX.Element {
  return (
    <>
      {answers.map((answer) =>
        <div className="form-check">
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