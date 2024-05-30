import { createReducer } from "@reduxjs/toolkit";
import SurveyCards from "../types/survey-cards";
import { surveys } from "../mocks/surveys";
import { createSurvey, getSurveys } from "./action";

const initialState: {surveys: SurveyCards} = {
  surveys: [],
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getSurveys, (state) => {
      state.surveys = surveys
    })
})

