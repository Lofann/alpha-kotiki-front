import { Question } from "./question"

// Тип для превью-карточки опроса
export type SurveyCard = {
  id: string,
  name: string,
  description: string,
  completionTimeLimit: number,
  price: number,
  questions: Question[], 
}
