import { createAction } from "@reduxjs/toolkit";

export const getSurveys = createAction('data/getSurveys');

export const changeQuestionNumber = createAction<number>('data/passing-survey/change-question-number');

export const resetQuestionNumber = createAction('data/passing-survey/reset-question-number');