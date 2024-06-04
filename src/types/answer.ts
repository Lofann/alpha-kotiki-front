//import { QuestionType } from "../const"

export type PossibleAnswer = {
    id: string,
    questionId: string,
    value: string
}
export type Answer = {
  questionId: string,
  values: string[]
}