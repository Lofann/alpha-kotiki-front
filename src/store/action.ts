import { createAction } from "@reduxjs/toolkit";
import { Answers } from "../types/answers";

export const getSurveys = createAction('data/getSurveys');

export const changeQuestionNumber = createAction<number>('data/passing-survey/change-question-number');

export const resetQuestionNumber = createAction('data/passing-survey/reset-question-number');

export const resetAnswers = createAction('data/passing-survey/reset-answers')

export const updateAnswers = createAction<Answers>('data/passing-survey/update-answers')