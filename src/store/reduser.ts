import { createReducer } from "@reduxjs/toolkit";
import SurveyCards from "../types/survey-cards";
import { surveys } from "../mocks/surveys";
import { 
  getSurveys,
  resetQuestionNumber,
  changeQuestionNumber
} from "./action";

const initialState: {surveys: SurveyCards, question: number} = {
  surveys: [],
  question: 0
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
})