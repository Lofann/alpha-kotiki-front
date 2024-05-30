import { Answers } from "./types/answers"

export const filterAnswers = (savedAnswers: Answers, currentQuestionId: string) => {
  return savedAnswers.filter((answer) => answer.questionId !== currentQuestionId)
}