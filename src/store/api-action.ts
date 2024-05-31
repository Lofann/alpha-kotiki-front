import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import SurveyCards from "../types/survey-cards";
import { APIRoute } from "../const";
import { AppDispatch, State } from "../types/state";
import { FullSurvey } from "../types/full-survey";

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
