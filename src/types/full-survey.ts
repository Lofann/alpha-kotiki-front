import { Question } from "./question"
import { SurveyCard } from "./survey-card"

export type FullSurvey = {
  survey: SurveyCard
  questions: Question[]
}