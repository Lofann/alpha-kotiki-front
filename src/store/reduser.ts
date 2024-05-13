import { createReducer } from "@reduxjs/toolkit";
import SurveyCards from "../types/survey-cards";
import { Answers } from "../types/answers";
import { surveys } from "../mocks/surveys";
import { 
  getSurveys,
  resetQuestionNumber,
  changeQuestionNumber,
  updateAnswers,
  resetAnswers
} from "./action";

const initialState: {surveys: SurveyCards, question: number, answers: Answers} = {
  surveys: [],
  question: 0,
  answers: []
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getSurveys, (state) => {
      state.surveys = surveys
    })
    .addCase(resetQuestionNumber, (state) => {
      state.question = 0
    })
    .addCase(changeQuestionNumber, (state, action) => {
      state.question = action.payload
    })
    .addCase(resetAnswers, (state) => {
      state.answers = []
    })
    .addCase(updateAnswers, (state, action) => {
      state.answers = action.payload
    })
})