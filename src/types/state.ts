import { store } from "../store";
import SurveyCards from "./survey-cards";
import { SurveyCard } from "./survey-card";
import { Answers } from "./answers";
import Question from "../components/question/question.props";
import { Survey } from "./survey";
import { UUID } from "crypto";

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type PassingSurveyData = {
  surveys: SurveyCards, 
  survey: SurveyCard | undefined,
  question: number, 
  answers: Answers
}

export type CreateSurveyData ={
  //Questions: Array<Question>
  CreatorId: String,
  Name: string,
  Description: string,
  Price: number,
  IsLimitedPublicationTime: boolean,
  PublicationTimeLimit: Date|undefined,
  UsagesLimit: number,
  IsLimitedCompletionTime: number,
  CompletionTimeLimit: number,
  Questions: Array<Question>
}