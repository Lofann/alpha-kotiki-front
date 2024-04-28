import { QuestionProps } from "./question-props";

export default function DropDownListQuestion({answers}: QuestionProps): JSX.Element {
  return (
    <select className="form-select" aria-label="Select example">
      {answers.map((answer) => <option value={answer}>{answer}</option>)}
    </select>
  )
}