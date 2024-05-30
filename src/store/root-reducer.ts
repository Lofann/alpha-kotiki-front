import { combineReducers } from "@reduxjs/toolkit"
import { NameSpace } from "../const"
import { passingSurveyData } from "./passing-survey-data/passing-survey.slise"
import { createSurveyData } from "./survey-constructor-data/create-survey.slise"

export const rootReducer = combineReducers({
  [NameSpace.Passing]: passingSurveyData.reducer,
  [NameSpace.Creating]: createSurveyData.reducer,
})