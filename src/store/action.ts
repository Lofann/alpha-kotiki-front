import { createAction } from "@reduxjs/toolkit";
import { Answers } from "../types/answers";
import { SurveyCard } from "../types/survey-card";
import SurveyCards from "../types/survey-cards";
import { Survey } from "../types/survey";
import { Question } from "../types/question";

export const getSurveys = createAction<SurveyCards>('data/get-surveys');

export const setSurvey = createAction<SurveyCard>('data/set-survey')

export const changeQuestionNumber = createAction<number>('data/passing-survey/change-question-number');

export const resetQuestionNumber = createAction('data/passing-survey/reset-question-number');

export const resetAnswers = createAction('data/passing-survey/reset-answers')

export const updateAnswers = createAction<Answers>('data/passing-survey/update-answers')

//Блок создания опроса 

// export const setNameSurvey = createAction<string>('data/survey-constructor/name')

// export const setDescriptionSurvey = createAction<string>('data/survey-constructor/discription')

// export const setPriceSurvey = createAction<number>('data/survey-constructor/price')

// export const setIsLimitedPublicationTimeSurvey = createAction<boolean>('data/survey-constructor/IsLimitedPublicationTime')

// export const setPublicationTimeLimitSurvey = createAction<Date>('data/survey-constructor/date') 

// export const setUsagesLimitSurvey = createAction<number>('data/survey-constructor/UsagesLimit')

// export const setIsLimitedCompletionTimeSurvey = createAction<number>('data/survey-constructor/IsLimitedCompletionTime')

// export const setCompletionTimeLimitSurvey = createAction<number>('data/survey-constructor/CompletionTimeLimitTime')

export const saveNewSurvey = createAction<Survey>('data/survey-constructor/create-survey')

export const updateQuestions = createAction<Array<Question>>('data/survey-constructor/update-questions')

// export const getQuestions = createAction('data/survey-constructor/update-questions')

 
