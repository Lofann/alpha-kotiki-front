import { QuestionPost } from "./question-post"
import { SurveyPost } from "./survey-post"

export type FullSurveyPost = {
    survey: SurveyPost | undefined,
    questions: QuestionPost[] | undefined

}