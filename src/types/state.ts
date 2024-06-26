import { store } from "../store";
import SurveyCards from "./survey-cards";
import { SurveyCard } from "./survey-card";
import { Answers } from "./answers";
import { SurveyPost } from "./survey-post";
import { Question } from "./question";
import { QuestionPost } from "./question-post";

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type PassingSurveyData = {
  surveys: SurveyCards, 
  survey: SurveyCard | undefined,
  question: number, 
  answers: Answers
  isSurveysDataLoading: boolean,
  isSurveyDataLoading: boolean
}

export type CreateSurveyData = {
  survey: SurveyPost | undefined,
  questions:QuestionPost[]
}