import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import SurveyCards from "../types/survey-cards";
import { SurveyCard } from "../types/survey-card";
import { APIRoute } from "../const";
import { AppDispatch, State } from "../types/state";

export const fetchSurveys = createAsyncThunk<SurveyCards, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSurveys',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<SurveyCards>(APIRoute.Surveys);
    return data;
  }
);

export const fetchSurvey = createAsyncThunk<SurveyCard, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSurveys',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<SurveyCard>(`${APIRoute.Surveys}/${id}`);
    return data;
  }
);
