import { createAction } from "@reduxjs/toolkit";
import { Answers } from "../types/answers";
import { SurveyCard } from "../types/survey-card";
import { Survey } from "../types/survey";

export const getSurveys = createAction('data/get-surveys');

export const setSurvey = createAction<SurveyCard>('data/set-survey')

export const changeQuestionNumber = createAction<number>('data/passing-survey/change-question-number');

export const resetQuestionNumber = createAction('data/passing-survey/reset-question-number');

export const resetAnswers = createAction('data/passing-survey/reset-answers')

export const updateAnswers = createAction<Answers>('data/passing-survey/update-answers')

//Блок создания опроса 

export const setNameSurvey = createAction<string>('data/survey-constructor/name')

export const setDescriptionSurvey = createAction<string>('data/survey-constructor/discription')

export const setPriceSurvey = createAction<number>('data/survey-constructor/price')

export const setIsLimitedPublicationTimeSurvey = createAction<boolean>('data/survey-constructor/IsLimitedPublicationTime')

export const setPublicationTimeLimitSurvey = createAction<Date>('data/survey-constructor/date') 

export const setUsagesLimitSurvey = createAction<number>('data/survey-constructor/UsagesLimit')

export const setIsLimitedCompletionTimeSurvey = createAction<number>('data/survey-constructor/IsLimitedCompletionTime')

export const setCompletionTimeLimitTimeSurvey = createAction<number>('data/survey-constructor/CompletionTimeLimitTime')

export const saveNewSurvey = createAction<Survey>('data/survey-constructor/saveSurvey')


