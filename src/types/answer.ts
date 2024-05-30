import { QuestionType } from "../const"

export type Answer = {
    id: number,
    Type : QuestionType,
    Value: string
}
export type Answer = {
  questionId: string,
  answers: string[]
}