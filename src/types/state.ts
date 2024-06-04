import { store } from "../store";
import SurveyCards from "./survey-cards";
import { SurveyCard } from "./survey-card";
import { Answers } from "./answers";

import { UUID } from "crypto";
import { Survey } from "./survey";
import { Question } from "./question";

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
  survey: Survey,
  question:Question[]
  //Questions: Array<Question>
  // creatorId: string,
  // name: string,
  // description: string,
  // price: number,
  // isLimitedPublicationTime: boolean,
  // publicationTimeLimit: Date|undefined,
  // usagesLimit: number,
  // isLimitedCompletionTime: number,
  // completionTimeLimit: number,
  // questions: Array<Question>
}