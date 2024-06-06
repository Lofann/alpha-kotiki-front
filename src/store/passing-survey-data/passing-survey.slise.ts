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
  answers: [],
  isSurveysDataLoading: false,
  isSurveyDataLoading: false
};

export const passingSurveyData = createSlice({
  name: NameSpace.Passing,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchSurveysAction.pending, (state) => {
      state.isSurveysDataLoading = true
    })
    .addCase(fetchSurveysAction.fulfilled, (state, action) => {
      state.surveys = action.payload.surveys
      state.isSurveysDataLoading = false
    })
    .addCase(fetchSurvey.pending, (state) => {
      state.isSurveyDataLoading = true
    })
    .addCase(fetchSurvey.fulfilled, (state, action) => {
      state.survey = { ...action.payload.survey, questions: action.payload.questions}
      state.isSurveyDataLoading = false
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

