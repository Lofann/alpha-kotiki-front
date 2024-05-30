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

