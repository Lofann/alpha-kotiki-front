import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import SurveyCards from "../types/survey-cards";
import { APIRoute } from "../const";
import { AppDispatch, State } from "../types/state";
import { FullSurvey } from "../types/full-survey";
import { FullAnswer } from "../types/full-answer";
import { FullSurveyPost } from "../types/full-servey-post";

export const fetchSurveysAction = createAsyncThunk<{surveys: SurveyCards}, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSurveys',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<{surveys: SurveyCards}>(APIRoute.Surveys);
    return data;
  }
);

export const fetchSurvey = createAsyncThunk<FullSurvey, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSurvey',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<FullSurvey>(`${APIRoute.Surveys}/${id}`);
    return data;
  }
);

export const addAnswers = createAsyncThunk<void, FullAnswer, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addSurveyAnswers',
  async ({userId, answers}, {extra: api}) => {
    await api.post<FullAnswer>(`${APIRoute.Surveys}${APIRoute.PostAnswers}`, {userId, answers});
  }
);

export const postNewSurvey = createAsyncThunk<void, FullSurveyPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postNewSurvey',
  async ({survey, questions}, {extra: api}) => {
    try {
      console.log({survey, questions});
      await api.post<FullSurveyPost>(`${APIRoute.CreateSurveys}`,{survey,questions});
  }catch(error){
    console.error(error)
  }
}
)