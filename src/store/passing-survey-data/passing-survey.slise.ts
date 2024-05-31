import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { PassingSurveyData } from '../../types/state';
import { 
  getSurveys,
  changeQuestionNumber,
  updateAnswers,
  resetQuestionNumber,
  resetAnswers,
  setSurvey
} from '../action';
import { fetchSurvey, fetchSurveysAction } from '../api-action';

const initialState: PassingSurveyData = {
  surveys: [],
  survey: undefined,
  question: 0,
  answers: []
};

export const passingSurveyData = createSlice({
  name: NameSpace.Passing,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchSurveysAction.fulfilled, (state, action) => {
      state.surveys = action.payload.surveys
    })
    .addCase(fetchSurvey.fulfilled, (state, action) => {
      state.survey = { ...action.payload.survey, questions: action.payload.questions}
    })
    .addCase(getSurveys, (state, action) => {
      state.surveys = action.payload
    })
    .addCase(setSurvey, (state, action) => {
      state.survey = action.payload
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
  }
});

