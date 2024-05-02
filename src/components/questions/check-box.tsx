import { QuestionProps } from "./question-props";

export default function CheckBoxQuestion({answers}: QuestionProps): JSX.Element {
  return (
    <>
      {answers.map((answer,index) =>
        <div key={index} className="form-check">
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